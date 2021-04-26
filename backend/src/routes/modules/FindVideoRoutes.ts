import { Router } from 'express';
import { BasedRoutes } from './BasedRoutes';
import searchVideoController from '../../controllers/searchVideoController';

export class FindVideoRoutes extends BasedRoutes {
    constructor(nameOfPath: string) {
        super(nameOfPath);
    }
    public setRoute (): Router {
        const router: Router = Router();
        router.get(`${this.nameOfPath}`, searchVideoController.findVideo);
        return router;
    }
}
//