import { Router } from 'express';
import { getFile, deleteFile, uploadFile } from '../../controllers/rest/uploadFilesController';
import { BasedRoutes } from './BasedRoutes';
import multer from 'multer';

export class UploadFilesRoute extends BasedRoutes {
  public setRoute (): Router {
    const router: Router = Router();
    const upload = multer({ dest: 'public/files' });
    // router.get(`${this.nameOfPath}///`, upload.single("myFile"), (req, res) => {
    //
    // });

    router.post(`${this.nameOfPath}/add_file`, upload.single("myFile"), (req, res) => {
    })
    //router.post(`${this.nameOfPath}/add_file`, uploadFile);
    router.delete(`${this.nameOfPath}/delete_file`, deleteFile);
    return router;
  }
}