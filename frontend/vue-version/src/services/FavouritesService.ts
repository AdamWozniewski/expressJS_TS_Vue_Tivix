import $http from '@/axios/axios';
import { RefreshToken } from '@/decorators/RefreshDecorator';

const staticAuthPart = '/video';

export default class FavouritesService {
  @RefreshToken()
  static async removeFavourities(imdbID: string): Promise<object> {
    const { data } = await $http.delete(`${staticAuthPart}/deleteVideo/${imdbID}`);
    return data;
  }
  @RefreshToken()
  static async addFavourities(imdbID: string): Promise<object> {
    const { data } = await $http.post(`${staticAuthPart}/save/${imdbID}`);
    return data;
  }
}
