import { $http } from '../axios/axios';
import { RefreshToken } from '../decorators/RefreshDecorator';

const staticAuthPart = '/video';

export default class FavouritesService {
  @RefreshToken()
  static async removeFavourites(imdbID: string): Promise<object> {
    const { data } = await $http.delete(
      `${staticAuthPart}/deleteVideo/${imdbID}`,
    );
    return data;
  }

  @RefreshToken()
  static async addFavourites(imdbID: string): Promise<object> {
    const { data } = await $http.post(`${staticAuthPart}/save/${imdbID}`);
    return data;
  }
}
