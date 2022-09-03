import passport from 'passport';
import passportJWT, { JwtFromRequestFunction } from 'passport-jwt';
import User, { IUser } from '../models/mongoose/User';

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const verifyCallback = ({ id }: { id: string }, done: any): Promise<any> => {
  return User.findOne({ _id: id })
    .then((user: IUser) => done(null, user))
    .catch((err) => done(err));
};

export const setPassport = (): void => {
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
