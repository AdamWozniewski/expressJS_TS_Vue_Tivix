import $http from '@/axios/axios';

export default class VideoService {
    static async findVideo(params: object): Promise<object> {
        // const { data } = await $http.get(`/api/find`, { params });
        const { data } = await $http.get(`http://www.omdbapi.com/?apikey=ce64c663&plot=full`, { params });
        return data;
    }
}