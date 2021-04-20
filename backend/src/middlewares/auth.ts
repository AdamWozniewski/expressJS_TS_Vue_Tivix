import { Response, Request } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken'

export const authorisation: any = (
  req: Request, 
  res: Response, 
  next: any) => passport.authenticate(
    'jwt', {
      session: false,
    }
  )(req, res, next);

export const authorisationJWT = (
    req: Request,
    res: Response,
    next: any) => {
    const token = req.cookies.JWT

    if (!token) return res.sendStatus(401)
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}
