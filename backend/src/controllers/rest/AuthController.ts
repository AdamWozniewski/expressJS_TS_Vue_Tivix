import jwt from 'jsonwebtoken';
import { Response, Request } from 'express';
import User, { IUser } from '../../models/mongoose/User';
import { jwtTokenUtilities, jwtSign } from '../../utilities/jwtTokenUtilities';
import Access from '../../models/mongoose/Access';
import {
  EXPIRES,
  MAX_AGE,
  JWT_REF,
  JWT,
  UNAUTHORIZED,
  FORBIDDEN,
  ALLOW,
  NOT_FOUND,
} from '../../static/values';

export class AuthController {
  static async register(req: Request, res: Response): Promise<any> {
    const { first_name, last_name, email, password } = req.body;
    const user: IUser = new User({
      first_name,
      last_name,
      email,
      roles: ['user'],
    });
    try {
      await User.register(user, password).then();
      return res.sendStatus(ALLOW).send({ success: true });
    } catch (error) {
      return res.sendStatus(NOT_FOUND).send({ success: false });
    }
  }

  static async refresh(req: Request, res: Response): Promise<any> {
    const refreshToken: string =
      req.cookies.JWT_REF || req.headers['authorization'].split(' ')[1];
    if (!refreshToken) res.status(FORBIDDEN).json({ unauthorized: true });

    const tokenExist: any = await Access.findOne({ refreshToken });
    if (!tokenExist) res.status(UNAUTHORIZED).json({ unauthorized: true });

    const { id }: any = jwt.verify(
      tokenExist.refreshToken,
      process.env.JWT_SECRET_REFRESH,
    );
    const accessToken = jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: EXPIRES,
    });
    return res
      .cookie(JWT, accessToken, {
        maxAge: EXPIRES,
        httpOnly: true,
      })
      .status(ALLOW)
      .json({ accessToken });
  }

  static async login(req: Request, res: Response): Promise<any> {
    try {
      const token = jwtSign(req, process.env.JWT_SECRET, EXPIRES);
      const refreshToken = jwtSign(
        req,
        process.env.JWT_SECRET_REFRESH,
        MAX_AGE,
      );
      await new Access({ refreshToken }).save();
      res
        .cookie(JWT_REF, refreshToken, {
          maxAge: MAX_AGE,
          httpOnly: true,
        })
        .cookie(JWT, token, {
          maxAge: EXPIRES,
          httpOnly: true,
        });
      return res.status(ALLOW).send({ token, refreshToken });
    } catch (error) {
      throw error;
    }
  }

  static async logout(req: Request, res: Response): Promise<any> {
    try {
      const refreshToken = req.cookies.JWT_REF;
      await Access.findOneAndDelete({ refreshToken });
      res.clearCookie(JWT).clearCookie(JWT_REF);
      res.sendStatus(ALLOW).json({ success: 'User logged out!' });
    } catch (error) {
      throw error;
    }
  }

  static async userInformation(req: Request, res: Response): Promise<any> {
    const { id: _id }: any = await jwtTokenUtilities(req);
    try {
      const data = await User.findOne({ _id }).select([
        'roles',
        'first_name',
        'last_name',
        'email',
      ]);
      return res.status(ALLOW).json({ data });
    } catch (error: any) {
      return res.status(FORBIDDEN);
    }
  }
}
