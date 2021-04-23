import axios from 'axios';

export default class FavouritesService {
    static async getFavourities(imdbID: string): Promise<object> {
        const { data } = await axios.get(`/api/video/get-video/${imdbID}`);
        return data;
    }
    static async removeFavourities(imdbID: string): Promise<object> {
        const { data } = await axios.delete(`/api/video/deleteVideo/${imdbID}`);
        return data;
    }
    static async addFavourities(imdbID: string): Promise<object> {
        const { data } = await axios.post(`/api/video/save/${imdbID}`);
        return data;
    }
}
