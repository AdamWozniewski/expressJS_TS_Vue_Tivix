import $http from '@/axios/axios';

const staticAuthPart = '/video';

export default class FavouritesService {
  static async removeFavourities(imdbID: string): Promise<object> {
    const { data } = await $http.delete(`${staticAuthPart}/deleteVideo/${imdbID}`);
    return data;
  }
  static async addFavourities(imdbID: string): Promise<object> {
    const { data } = await $http.post(`${staticAuthPart}/save/${imdbID}`);
    return data;
  }
}
