import { Router } from 'express';
import links from './../config/staticLinks';

import { AuthRoute } from './modules/AuthRoute';
import { VideoRoutes } from './modules/VideoRoutes';

export class IndexRoute {
    public getRoutes(): any {
        const router: Router = Router()
        router.use(new AuthRoute(links.endpointType.auth).setRoute());
        router.use(new VideoRoutes(links.endpointType.video).setRoute());
        return router;
    }
}
