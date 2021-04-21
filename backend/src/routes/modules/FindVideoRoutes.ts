import { Router } from 'express';
import { BasedRoutes } from './BasedRoutes';
import searchVideoController from '../../controllers/searchVideoController';
import { createProxyMiddleware } from 'http-proxy-middleware'
export class FindVideoRoutes extends BasedRoutes {
    constructor(nameOfPath: string) {
        super(nameOfPath);
    }
    public setRoute (): Router {
        const router: Router = Router();
        const options = {
            // target: `http://www.omdbapi.com/?apikey=${process.env.OMDb}&t=bl&plot=full`, // target host
            target: `http://www.omdbapi.com/`, // target host
            changeOrigin: true, // needed for virtual hosted sites
            ws: true, // proxy websockets
            headers: {
                accept: "application/json",
                method: "GET",
            },
            pathRewrite: {
                // '^/api/old-path': '/api/new-path', // rewrite path
                // '^/api/remove/path': '/path', // remove base path
            },
            router: {
                // when request.headers.host == 'dev.localhost:3000',
                // override target 'http://www.example.org' to 'http://localhost:8000'
                // 'dev.localhost:3000': 'http://localhost:8000',
            },
        };

        // router.get(`${this.nameOfPath}`, createProxyMiddleware(options));
        router.get(`${this.nameOfPath}`, searchVideoController.findVideo);

        return router;
    }
}
