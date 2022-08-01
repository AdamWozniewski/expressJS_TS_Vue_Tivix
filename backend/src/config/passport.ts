import passport from 'passport';
import passportJWT, { JwtFromRequestFunction } from 'passport-jwt';
import User from '../models/mongoose/User';

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const verifyCallback = (payload: any, done: any): Promise<any> => {
  return User.findOne({ _id: payload.id })
    .then((user) => done(null, user))
    .catch((err) => done(err));
};

export const setPassport = () => {
  const config: {
    jwtFromRequest: JwtFromRequestFunction;
    secretOrKey: string;
  } = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
  };
  passport.use(User.createStrategy());
  passport.use(new JWTStrategy(config, verifyCallback));
};
