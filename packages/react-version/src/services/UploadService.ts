import { $http } from '../axios/axios';
import { RefreshToken } from '../decorators/RefreshDecorator';
// import { RefreshToken } from '@cms/shared-anywhere/RefreshToken';

const staticUploadPart = '/file';
export default class UploadService {
  @RefreshToken()
  static async uploadFile(params: any): Promise<object> {
    const { data } = await $http.post(`${staticUploadPart}/upload`, params, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  }
}
