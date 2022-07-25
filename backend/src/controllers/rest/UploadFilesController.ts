import fs from 'fs';
import { IncomingForm } from 'formidable';
import { Response, Request } from 'express';
import User from '../../models/mongoose/User';
import multer from 'multer';
import { jwtTokenUtilities } from '../../utilities/jwtTokenUtilities';
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    console.log(file);
    cb(null, './savedFiles');
  },
  filename: function (req, file, cb) {
    cb(null , `${Date.now()}_${file.originalname}`);
  }
})
const upload =  multer({ storage: storage }).any();
export const uploadFile = async (req: Request, res: Response): Promise<any> => {
  upload(req, res,(err) => {
    if (err) return res.status(404).send({ success: false });
    else {
      const { id: _id }: { id: string } = jwtTokenUtilities(req);
      console.log();
      // try {
      //   await User.updateOne(
      //     { _id },
      //     { $push: { videos: req.params.imdbID }},
      //   )
      //   return res.status(201).send(await returnSelectedVideos(_id));
      // } catch (error) {
      //   throw error;
      // }
      return res.status(200).send({ success: true });
    }
  });
}

export const deleteFile = (req: Request, res: Response): Response => {
  const {} = req.body;
  return res;
}

export const getFile = (req: Request, res: Response): Response => {
  const {} = req.body;
  return res;
}
