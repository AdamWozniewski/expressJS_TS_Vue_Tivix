import { $http } from '../axios/axios';
import { RefreshToken } from '../decorators/RefreshDecorator';
import { apiRouter } from '../routes/apiRouter';

const staticAuthPart: string = '/auth';
const { logout, login, register, userInformation } = apiRouter;
export default class AuthService {
  static async login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<object> {
    const { data } = await $http.post(`${staticAuthPart}${login}`, {
      email,
      password,
    });
    return data;
  }

  static async createUser({
    first_name,
    last_name,
    email,
    password,
  }: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
  }): Promise<object> {
    const { data } = await $http.post(`${staticAuthPart}${register}`, {
      first_name,
      last_name,
      email,
      password,
    });
    return data;
  }

  static async logout() {
    console.log('afasfafaf');
    await $http.post(`${staticAuthPart}${logout}`);
  }

  @RefreshToken()
  static async getUser(): Promise<object> {
    const { data } = await $http.get(`${staticAuthPart}${userInformation}`);
    return data;
  }
}
