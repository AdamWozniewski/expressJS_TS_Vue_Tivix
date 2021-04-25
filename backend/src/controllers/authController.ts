import jwt from 'jsonwebtoken';
import { Response, Request } from 'express';
import User, { IUser } from './../models/User';
import jwtTokenDecode from '../utilities/jwtTokenDecode';

export default {
    register: async (req: Request, res: Response): Promise<any> => {
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
            return res.send({ success: true });
        } catch (error) {
            throw error;
        }
    },
    refresh: async (req: any, res: Response): Promise<any> => {
        const refreshToken = req.body.token;
        if (!refreshToken) {
            return res.status(401);
        }
        try {
            await jwt.verify(refreshToken, process.env.JWT_SECRET_REFRESH);
        } catch (error) {
            return res.send(403);
        }
        const accessToken = jwt.sign({
                id: req.user._id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: 86400, // 1d
            });
        res.send({ accessToken });
    },
    async login (req: any, res: Response): Promise<any> {
        try {
            const token = jwt.sign({
                    id: req.user._id,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: 86400, // 1d
                });
            const refreshToken = jwt.sign({
                    id: req.user._id,
                },
                process.env.JWT_SECRET_REFRESH,
                {
                    expiresIn: 525600,
                });
            res.cookie('JWT', token, {
                maxAge: 86400,
                httpOnly: false,
            });
            return res.send({ token, refreshToken });
        } catch (error) {
            throw error;
        }
    },
    async logout (req: any, res: Response): Promise<any> {
        try {
            res.clearCookie('JWT');
            return res.send({ success: true });
        } catch (error) {
            throw error;
        }
    },
    async userInformation (req: any, res: Response): Promise<any> {
        const { id: _id } = jwtTokenDecode(req)
        try {
            return res.send(await User
                .findOne({ _id })
                .select(['videos', 'roles', 'first_name', 'last_name', 'email'])
            );
        } catch (error) {
            throw error;
        }
    },

}
