import { Router } from 'express';
import { links } from '../config/staticLinks';
import { AuthRoutes } from './modules/AuthRoutes';
import { VideoRoutes } from './modules/VideoRoutes';
import { FindVideoRoutes } from './modules/FindVideoRoutes';
import { GraphQL } from './modules/GraphQL';
import { UploadFilesRoute } from "./modules/UploadFilesRoute";

export class IndexRoute {
  public getRoutes(): any {
    const router: Router = Router();
    const { auth, file, video, find, graphQL } = links.endpointType;
    router.use(new AuthRoutes(auth).setRoute());
    router.use(new UploadFilesRoute(file).setRoute());
    router.use(new VideoRoutes(video).setRoute());
    router.use(new FindVideoRoutes(find).setRoute());
    router.use(new GraphQL(graphQL).setRoute());
    return router;
  }
}
