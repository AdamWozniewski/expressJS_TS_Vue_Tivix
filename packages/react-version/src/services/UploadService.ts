import { $http } from '../axios/axios';
import { RefreshToken } from '../decorators/RefreshDecorator';

const staticUploadPart = '/file/upload';
const staticHeaders = {
  'Content-Type': 'multipart/form-data',
};
export default class UploadService {
  @RefreshToken()
  static async uploadFile(params: any): Promise<object> {
    const { data } = await $http.post(`${staticUploadPart}`, params, {
      headers: staticHeaders,
    });
    return data;
  }
}
