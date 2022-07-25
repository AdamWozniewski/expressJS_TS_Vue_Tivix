import { $http } from '../axios/axios';
import { RefreshToken } from '../decorators/RefreshDecorator';

const staticUploadPart = '/file';
export default class UploadService {
  @RefreshToken()
  static async uploadFile(params: any): Promise<object> {
    console.log(params);
    const { data } = await $http.post(`${staticUploadPart}/upload`, params, {
      headers: {
        // Authorization: `Bearer ${authToken}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    // const { data } = await $https.post(`${staticUploadPart}/upload`, { params })
    return data;
  }
}