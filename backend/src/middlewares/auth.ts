import { Response, Request } from 'express';
import jwt from 'jsonwebtoken';

export const authorisationJWT = (
  req: Request,
  res: Response,
  next: any,
): Response => {
  const token = req.headers['authorization'].split(' ')[1];
  if (!token) return res.send(401).json({ unauthorized: true });
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.send(403).json({ unknown: true });
    req.user = user;
    next();
  });
};
