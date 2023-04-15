import { Response, Request } from 'express';
import User, { IUser } from '../../models/mongoose/User';
import multer from 'multer';
import { jwtTokenUtilities } from '../../utilities/jwtTokenUtilities';
import { ALLOW, NOT_FOUND } from '../../static/values';
import File, { IFile } from '../../models/mongoose/File';

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './savedFiles'),
  filename: (req, file, cb) => cb(null, `${Date.now()}_${file.originalname}`),
});
const upload = multer({ storage }).any();

export class FileController {
  static async uploadFile() {}

  static deleteFile(req: Request, res: Response): Response {
    const {} = req.body;
    return res;
  }

  static getFile(req: Request, res: Response): Response {
    const {} = req.body;
    return res;
  }
}

export const uploadFile = async (req: Request, res: Response): Promise<any> => {
  upload(req, res, (err) => {
    const { user, files }: any = req;
    const [file] = files;
    if (err) return res.status(NOT_FOUND).send({ success: false });
    else {
      const { filename, mimetype } = file;
      const newFile: IFile = new File({
        name: filename,
        user: user.id,
        fileType: mimetype,
        createdAt: Date.now(),
      });
      try {
        newFile.save().then(() => res.status(ALLOW).send({ success: true }));
      } catch (error) {
        throw error;
      }
    }
  });
};
