import $http from '@/axios/axios';

export default class FavouritesService {
    static async removeFavourities(imdbID: string): Promise<object> {
        const { data } = await $http.delete(`/api/video/deleteVideo/${imdbID}`);
        return data;
    }
    static async addFavourities(imdbID: string): Promise<object> {
        const { data } = await $http.post(`/api/video/save/${imdbID}`);
        return data;
    }
}
