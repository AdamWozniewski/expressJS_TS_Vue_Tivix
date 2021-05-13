import $http from '@/axios/axios';
import RefreshDecorator from '@/decorators/RefreshDecorator';

const staticAuthPart = '/video';

export default class FavouritesService {
  @RefreshDecorator()
  static async removeFavourities(imdbID: string): Promise<object> {
    const { data } = await $http.delete(`${staticAuthPart}/deleteVideo/${imdbID}`);
    return data;
  }
  @RefreshDecorator()
  static async addFavourities(imdbID: string): Promise<object> {
    const { data } = await $http.post(`${staticAuthPart}/save/${imdbID}`);
    return data;
  }
}
