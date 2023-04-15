import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request } from 'express';

export const jwtTokenUtilities = (req: Request): JwtPayload | string =>
  jwt.verify(
    req.cookies.JWT || req.headers['authorization'].split(' ')[1],
    process.env.JWT_SECRET,
  );

export const jwtSign = (req, tokenType, expiresIn: number) =>
  jwt.sign({ id: req.user._id }, tokenType, { expiresIn });
