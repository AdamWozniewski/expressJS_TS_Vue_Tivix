import $http from '../axios/axios';
import RefreshDecorator from '../decorators/RefreshDecorator';

const staticAuthPart = '/video';

export default class FavouritesService {
  @RefreshDecorator()
  static async removeFavourites(imdbID: string): Promise<object> {
    const { data } = await $http.delete(`${staticAuthPart}/deleteVideo/${imdbID}`);
    return data;
  }
  @RefreshDecorator()
  static async addFavourites(imdbID: string): Promise<object> {
    const { data } = await $http.post(`${staticAuthPart}/save/${imdbID}`);
    return data;
  }
}
