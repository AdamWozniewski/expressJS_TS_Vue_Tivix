import passport from 'passport';
import passportJWT from 'passport-jwt';
import User from '../models/mongoose/User';

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

function verifyCallback(payload: any, done: any): Promise<any> {
  return User.findOne({ _id: payload.id })
    .then(user => {
      return done(null, user);
    })
    .catch(err => {
      return done(err);
    });
}

function setPassport() {
  const config = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
  };

  passport.use(User.createStrategy());
  passport.use(new JWTStrategy(config, verifyCallback));
}

export default setPassport;