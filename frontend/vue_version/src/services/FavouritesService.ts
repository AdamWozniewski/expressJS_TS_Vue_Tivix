import $http from '@/axios/axios';

export default class FavouritesService {
    static async getFavourities(i: string): Promise<object> {
        // const { data } = await $http.get(`/api/video/get-video/${imdbID}`);
        const { data } = await $http.get(`http://www.omdbapi.com/?apikey=ce64c663&plot=full`, { params: { i } });
        return data;
    }
    static async removeFavourities(imdbID: string): Promise<object> {
        const { data } = await $http.delete(`/api/video/deleteVideo/${imdbID}`);
        return data;
    }
    static async addFavourities(imdbID: string): Promise<object> {
        const { data } = await $http.post(`/api/video/save/${imdbID}`);
        return data;
    }
}
