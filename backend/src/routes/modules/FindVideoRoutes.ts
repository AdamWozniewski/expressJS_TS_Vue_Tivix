import { Router } from 'express';
import { BasedRoutes } from './BasedRoutes';
import { SearchVideoController } from '../../controllers/rest/SearchVideoController';
import { authorisationJWT } from '../../middlewares/auth';

export class FindVideoRoutes extends BasedRoutes {
  constructor(nameOfPath: string) {
    super(nameOfPath);
  }
  public setRoute (): Router {
    const router: Router = Router();
    router.get(`${this.nameOfPath}`, authorisationJWT, SearchVideoController.findVideo);
    return router;
  }
}
