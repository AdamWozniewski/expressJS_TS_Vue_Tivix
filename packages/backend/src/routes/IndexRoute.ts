import { Router } from 'express';
import { links } from '../config/staticLinks';
import { AuthRoutes } from './modules/AuthRoutes';
import { GraphQL } from './modules/GraphQL';
import { UploadFilesRoute } from './modules/UploadFilesRoute';

export class IndexRoute {
  public getRoutes(): Router {
    const router: Router = Router();
    const { auth, file, graphQL } = links.endpointType;
    router.use(new AuthRoutes(auth).setRoute());
    router.use(new UploadFilesRoute(file).setRoute());
    router.use(new GraphQL(graphQL).setRoute());
    return router;
  }
}
