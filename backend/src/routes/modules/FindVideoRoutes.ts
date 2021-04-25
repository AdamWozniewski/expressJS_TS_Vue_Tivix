import { Router } from 'express';
import { BasedRoutes } from './BasedRoutes';
import searchVideoController from '../../controllers/searchVideoController';
const proxy = require('express-http-proxy');
export class FindVideoRoutes extends BasedRoutes {
    constructor(nameOfPath: string) {
        super(nameOfPath);
    }
    public setRoute (): Router {
        const router: Router = Router();
        // router.get(`${this.nameOfPath}`, searchVideoController.findVideo);
        router.use(`${this.nameOfPath}`, proxy(`http://www.omdbapi.com/?apikey=ce64c663&t=bl&plot=full`, {
            
        }))
        return router;
    }
}
//