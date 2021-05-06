import jwt from 'jsonwebtoken';

export const jwtTokenUtilities: any = (req: any) =>
  jwt.verify(req.cookies.JWT, process.env.JWT_SECRET);

export const jwtSign: any = (req: any, tokenType, expiresIn: any) => {
  return jwt.sign({ id: req.user._id }, tokenType, { expiresIn });
}
