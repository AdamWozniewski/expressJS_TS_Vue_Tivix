import $http from '../axios/axios';
import RefreshDecorator from '../decorators/RefreshDecorator';

export default class VideoService {
  @RefreshDecorator()
  static async findVideo(params: object): Promise<object> {
    const { data } = await $http.get(`/find`, { params });
    return data;
  }
}