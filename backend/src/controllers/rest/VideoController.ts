import { Response } from 'express';
import User, { IUser } from '../../models/mongoose/User';
import { jwtTokenUtilities } from '../../utilities/jwtTokenUtilities';

const VIDEOS = 'videos';
const returnSelectedVideos = async _id => {
  const { videos }: IUser = await User.findById({ _id }).select(VIDEOS);
  return videos;
};

export class VideoController {
  static async saveVideo (req: any, res: Response): Promise<any> {
    const { id: _id }: { id: string } = jwtTokenUtilities(req);
    try {
      await User.updateOne(
        { _id },
        { $push: { videos: req.params.imdbID }},
      )
      return res.status(201).send(await returnSelectedVideos(_id));
    } catch (error) {
      throw error;
    }
  }
  static async deleteVideo(req: any, res: Response): Promise<any> {
    const { id: _id }: { id: any } = jwtTokenUtilities(req);
    try {
      await User.updateOne(
        { _id },
        { $pullAll: { videos: [ req.params.imdbID ]}},
      )
      return res.send(await returnSelectedVideos(_id));
    } catch (error) {
      throw error;
    }
  }
}