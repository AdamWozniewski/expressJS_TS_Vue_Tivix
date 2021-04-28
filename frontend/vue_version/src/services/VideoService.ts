import $http from '@/axios/axios';

export default class VideoService {
  static async findVideo(params: object): Promise<object> {
    const { data } = await $http.get(`/find`, { params });
    return data;
  }
}