import { Response, Request } from 'express';

export function notFound(req: Request, res: Response, next: any) {
    const err: any = new Error('404 page not found');
    err.status = 404;
    next(err);
}

export function catchAsync(fn: any) {
    return (req: Request, res: Response, next: any) => {
         fn(req, res, next).catch((err: Error) => next(err));
         }
    }

export function catchErrors(err: any, req: Request, res: Response, next: any) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message
    });
}