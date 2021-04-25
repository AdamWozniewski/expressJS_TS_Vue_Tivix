import { Router } from 'express';
import { BasedRoutes } from './BasedRoutes';
import searchVideoController from '../../controllers/searchVideoController';
// const proxy = require('express-http-proxy');
// import { createProxyMiddleware } from 'http-proxy-middleware';

export class FindVideoRoutes extends BasedRoutes {
    constructor(nameOfPath: string) {
        super(nameOfPath);
    }
    public setRoute (): Router {
        const router: Router = Router();
        // router.get(`${this.nameOfPath}`, searchVideoController.findVideo);
        // router.use(`${this.nameOfPath}`, createProxyMiddleware({
        //     target: `http://www.omdbapi.com/?apikey=${process.env.OMDb}&t=bl&plot=full`,
        //     changeOrigin: true, // needed for virtual hosted sites
        //     ws: true, // proxy websockets
        //     pathRewrite: {}
        //     }))
        return router;
    }
}
//