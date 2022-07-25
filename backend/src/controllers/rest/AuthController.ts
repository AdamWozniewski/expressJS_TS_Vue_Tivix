import jwt from 'jsonwebtoken';
import { Response, Request } from 'express';
import User, { IUser } from '../../models/mongoose/User';
import { jwtTokenUtilities, jwtSign } from '../../utilities/jwtTokenUtilities';
import Access from '../../models/mongoose/Access';
import { EXPIRES, MAX_AGE, JWT_REF, JWT } from '../../static/values';

export class AuthController {
  static async register (req: Request, res: Response): Promise<any> {
    const {
      first_name,
      last_name,
      email,
      password
    } = req.body;
    const user: IUser = new User({
      first_name,
      last_name,
      email,
      roles: ['user'],
      videos: [],
    });
    try {
      await User.register(user, password);
      return res.status(200).send({ success: true });
    } catch (error) {
      return res.status(404).send({ success: false });
    }
  }
  static async refresh (req: any, res: Response): Promise<any> {
    const refreshToken: string = req.cookies.JWT_REF;
    if (!refreshToken) return res.status(403).json({ unauthorized: true });

    const tokenExist: any = await Access.findOne({ refreshToken });
    if (!tokenExist) return res.status(401).json({ unauthorized: true });

    const { id }: any = jwt.verify(tokenExist.refreshToken, process.env.JWT_SECRET_REFRESH);
    const accessToken = jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: EXPIRES,
    });

    res.cookie(JWT, accessToken, {
      maxAge: EXPIRES,
      httpOnly: false,
    });
    return res.status(200).json({ accessToken });
  }
  static async login (req: any, res: Response): Promise<any> {
    try {
      const token = jwtSign(req, process.env.JWT_SECRET, EXPIRES);
      const refreshToken = jwtSign(req, process.env.JWT_SECRET_REFRESH, MAX_AGE);
      await new Access({ refreshToken }).save();
      res.cookie(JWT_REF, refreshToken, {
        maxAge: MAX_AGE,
        httpOnly: true,
      }).cookie(JWT, token, {
        maxAge: EXPIRES,
        httpOnly: true,
      });
      return res.status(200).send({ token, refreshToken });
    } catch (error) {
      throw error;
    }
  }
  static async logout (req: any, res: Response): Promise<any> {
    try {
      const refreshToken = req.cookies.JWT_REF;
      await Access.findOneAndDelete({ refreshToken });
      res.clearCookie(JWT).clearCookie(JWT_REF);
      return res.status(200).json({ success: 'User logged out!' });
    } catch (error) {
      throw error;
    }
  }
  static async userInformation (req: any, res: Response): Promise<any> {
    const { id: _id } = jwtTokenUtilities(req);
    try {
      return res.sendStatus(200).json({ ...await User
          .findOne({ _id })
          .select(['videos', 'roles', 'first_name', 'last_name', 'email']) }
      );
    } catch (error) {
      console.log("ABVCCCCCCCCCCCCCCCCCCCCCCCCC");
      throw error;
    }
  }
}