import UserSchema from '../../models/graphql/schemas/schema.user';
import User, { IUser } from '../../models/mongoose/User';
import { jwtTokenUtilities } from '../../utilities/jwtTokenUtilities';

export default {
  getUserVideos: async args => {
    const { id: _id } = jwtTokenUtilities(args);
    try {
      const { videos }: IUser = await User.findById({ _id }).select('videos');
      return videos;
    } catch (error) {
      throw error;
    }
  }
};