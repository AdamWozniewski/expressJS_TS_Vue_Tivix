import jwt from 'jsonwebtoken'
import { Response } from 'express';
import User from './../models/User';

export default {
    saveVideo: async (req: any, res: Response): Promise<any> => {
        const decoded: any = jwt.verify(
            req.headers.authorization.split(' ')[1],
            process.env.JWT_SECRET
        );
        const { id: _id } = decoded
        try {
            await User.updateOne(
                { _id },
                { $push: { videos: req.body.imdbID }}
            )
            return res.send({ success: true });
        } catch (error) {
            throw error
        }
    },
    deleteVideo: async (req: any, res: Response): Promise<any> => {
        const decoded: any = jwt.verify(
            req.headers.authorization.split(' ')[1],
            process.env.JWT_SECRET
        );
        const { id: _id } = decoded
        try {
            await User.updateOne(
                { _id },
                { $pullAll: { videos: [ req.body.imdbID ]}}
            )
            return res.send({ success: true });
        } catch (error) {
            throw error
        }
    },
    getSavedVideo: async (req: any, res: Response): Promise<any> => {
        const decoded: any = jwt.verify(
            req.headers.authorization.split(' ')[1],
            process.env.JWT_SECRET
        );
        const { id: _id } = decoded
        try {
            const { videos }: any = await User.findById({ _id }).select('videos')
            return res.send(videos);
        } catch (error) {
            throw error
        }
    },
}
