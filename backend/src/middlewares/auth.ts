import { Response, Request } from 'express';
import jwt from 'jsonwebtoken'

export const authorisationJWT = (
    req: Request,
    res: Response,
    next: any) => {
    const token = req.cookies.JWT;
    if (!token) return res.sendStatus(401).json({ unauthorized: true });
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403).json({ unknown: true });
        req.user = user;
        next();
    });
};
