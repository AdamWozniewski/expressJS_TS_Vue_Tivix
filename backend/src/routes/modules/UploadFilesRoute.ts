import { Router } from 'express';
import multer from 'multer';
import { getFile, deleteFile, uploadFile } from '../../controllers/rest/UploadFilesController';
import { BasedRoutes } from './BasedRoutes';
import { links } from '../../config/staticLinks';
import { authorisationJWT } from '../../middlewares/auth';

export class UploadFilesRoute extends BasedRoutes {
  public setRoute (): Router {
    const router: Router = Router();
    const uploadMulter = multer({ dest: 'savedFiles/' });
    // router.get(`${this.nameOfPath}///`, upload.single("myFile"), (req, res) => {
    //
    // });
    const { upload } = links.actions;
    router.post(`${this.nameOfPath}${upload}`, authorisationJWT, uploadFile);
    router.delete(`${this.nameOfPath}/delete_file`, deleteFile);
    return router;
  }
}