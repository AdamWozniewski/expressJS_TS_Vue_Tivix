import jwt from 'jsonwebtoken';

const jwtTokenDecode: any = req => {
  return jwt.verify(
    req.cookies.JWT,
    process.env.JWT_SECRET,
  );
};

export default jwtTokenDecode;