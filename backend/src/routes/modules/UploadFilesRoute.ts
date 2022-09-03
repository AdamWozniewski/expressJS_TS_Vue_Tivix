import { Router } from 'express';
import {
  uploadFile,
  FileController,
} from '../../controllers/rest/UploadFilesController';
import { BasedRoutes } from './BasedRoutes';
import { links } from '../../config/staticLinks';
import { authorisationJWT } from '../../middlewares/auth';

export class UploadFilesRoute extends BasedRoutes {
  public setRoute(): Router {
    const router: Router = Router();
    const { upload, getFile, deleteFile } = links.actions;
    router.post(`${this.nameOfPath}${upload}`, authorisationJWT, uploadFile);
    router.get(
      `${this.nameOfPath}${getFile}`,
      authorisationJWT,
      FileController.getFile,
    );
    router.delete(
      `${this.nameOfPath}${deleteFile}`,
      authorisationJWT,
      FileController.deleteFile,
    );
    return router;
  }
}
