import { Router } from 'express';
import links from './../config/staticLinks';

import { AuthRoutes } from './modules/AuthRoutes';
import { VideoRoutes } from './modules/VideoRoutes';
import { FindVideoRoutes } from './modules/FindVideoRoutes';
import { GraphQL } from './modules/GraphQL';

export class IndexRoute {
  public getRoutes(): any {
    const router: Router = Router()
    router.use(new AuthRoutes(links.endpointType.auth).setRoute());
    router.use(new VideoRoutes(links.endpointType.video).setRoute());
    router.use(new FindVideoRoutes(links.endpointType.find).setRoute());
    router.use(new GraphQL(links.endpointType.graphQL).setRoute());
    return router;
  }
}
