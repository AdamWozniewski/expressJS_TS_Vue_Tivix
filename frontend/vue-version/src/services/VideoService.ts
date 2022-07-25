import $http from '@/axios/axios';
import { RefreshToken } from '@/decorators/RefreshDecorator';

export default class VideoService {
  @RefreshToken()
  static async findVideo(params: object): Promise<object> {
    const { data } = await $http.get(`/find`, { params });
    return data;
  }
}