import { Router } from 'express';
import { links } from '../../config/staticLinks';
import { authorisationJWT } from '../../middlewares/auth';
import { BasedRoutes } from './BasedRoutes';
import { VideoController } from '../../controllers/rest/VideoController';

export class VideoRoutes extends BasedRoutes {
  constructor(nameOfPath: string) {
    super(nameOfPath);
  }

  public setRoute(): Router {
    const router: Router = Router();
    const { save, deleteVideo } = links.actions;
    router.post(
      `${this.nameOfPath}${save}/:imdbID`,
      authorisationJWT,
      VideoController.saveVideo,
    );
    router.delete(
      `${this.nameOfPath}${deleteVideo}/:imdbID`,
      authorisationJWT,
      VideoController.deleteVideo,
    );
    return router;
  }
}
