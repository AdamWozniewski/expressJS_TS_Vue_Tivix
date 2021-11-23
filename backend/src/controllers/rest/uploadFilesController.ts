import fs from 'fs';
import { IncomingForm } from 'formidable';
import { Response, Request } from 'express';
// import multer from "multer";

export function uploadFile(req: Request, res: Response): void {
    // const form = new IncomingForm();
    // form.parse(req, (err: any, fields: any, files: any) => {
    //   const oldpath: string = files.filetoupload.path;
    //   const newpath: string = __dirname + files.filetoupload.name;
    //   fs.rename(oldpath, newpath, err => {
    //     if (err) throw err;
    //     res.write('File uploaded and moved!');
    //     res.end();
    //   });
    // });
}

export function deleteFile(req: Request, res: Response): Response {
  const {} = req.body;
  return res;
}

export function getFile(req: Request, res: Response): Response {
  const {} = req.body;
  return res;
}
