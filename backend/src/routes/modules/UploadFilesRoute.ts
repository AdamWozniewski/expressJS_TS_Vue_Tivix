import { Router } from 'express';
import { getFile, deleteFile, uploadFile } from '../../controllers/uploadFilesController';
import { BasedRoutes } from './BasedRoutes';

export class UploadFilesRoute extends BasedRoutes {
    public setRoute (): Router {
        const router: Router = Router();
        router.get(`${this.nameOfPath}/:file`, getFile);
        router.post(`${this.nameOfPath}/add_file`, uploadFile);
        router.delete(`${this.nameOfPath}/delete_file`, deleteFile);
        return router;
    }
}