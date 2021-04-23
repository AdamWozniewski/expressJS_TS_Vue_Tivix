import { Router } from 'express';
import links from '../../config/staticLinks';
import { authorisation } from '../../middlewares/auth';
import { BasedRoutes } from './BasedRoutes';
import videoController from "../../controllers/videoController";

export class VideoRoutes extends BasedRoutes {
    constructor(nameOfPath: string) {
        super(nameOfPath);
    }
    public setRoute (): Router {
        const router: Router = Router();
        const { save, getVideo, deleteVideo } = links.endpointType.actions
        router.post(`${this.nameOfPath}${save}`, authorisation, videoController.saveVideo);
        router.delete(`${this.nameOfPath}${deleteVideo}/:imdbID`, authorisation, videoController.deleteVideo);
        router.get(`${this.nameOfPath}${getVideo}/:imdbID`, authorisation, videoController.getSavedVideo);

        return router;
    }
}
