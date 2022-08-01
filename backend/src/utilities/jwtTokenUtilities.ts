import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request } from 'express';

export const jwtTokenUtilities: JwtPayload | string = (req: Request) =>
  jwt.verify(
    req.cookies.JWT || req.headers['authorization'].split(' ')[1],
    process.env.JWT_SECRET,
  );

export const jwtSign = (req, tokenType, expiresIn: number) =>
  jwt.sign({ id: req.user._id }, tokenType, { expiresIn });
