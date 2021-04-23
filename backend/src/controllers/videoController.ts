import { Response } from 'express';
import User from './../models/User';
import jwtTokenDecode from '../utilities/jwtTokenDecode';

export default {
    saveVideo: async (req: any, res: Response): Promise<any> => {
        const { id: _id } = jwtTokenDecode(req);
        try {
            await User.updateOne(
                { _id },
                { $push: { videos: req.params.imdbID }}
            )
            return res.send({ success: true });
        } catch (error) {
            throw error;
        }
    },
    deleteVideo: async (req: any, res: Response): Promise<any> => {
        const { id: _id } = jwtTokenDecode(req);
        try {
            await User.updateOne(
                { _id },
                { $pullAll: { videos: [ req.params.imdbID ]}}
            );
            return res.send({ success: true });
        } catch (error) {
            throw error;
        }
    },
    getSavedVideo: async (req: any, res: Response): Promise<any> => {
        const { id: _id } = jwtTokenDecode(req);
        try {
            const { videos }: any = await User.findById({ _id }).select('videos');
            return res.send(videos);
        } catch (error) {
            throw error;
        }
    },
}
