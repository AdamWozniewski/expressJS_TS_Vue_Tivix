import $http from '../axios/axios';
// import { $https } from "../axios/fetch";
import RefreshDecorator from '../decorators/RefreshDecorator';
import { apiRouter } from './../routes/apiRouter';

const staticAuthPart = '/auth';
const { logout, login, register, userInformation } = apiRouter;
export default class AuthService {
  static async login({ email, password }: { email: string, password: string }): Promise<object> {
    const { data } = await $http.post(`http://localhost:6001/api${staticAuthPart}${login}`, { email, password });
    return data;
  }
  static async createUser({ first_name, last_name, email, password }: { first_name: string, last_name: string, email: string, password: string }): Promise<object> {
    const { data } = await $http.post(`${staticAuthPart}${register}`, { first_name, last_name, email, password });
    return data;
  }
  static async logout() {
    await $http.post(`${staticAuthPart}${logout}`);
  }
  @RefreshDecorator()
  static async getUser(): Promise<object> {
    const { data } = await $http.get(`http://localhost:6001/api${staticAuthPart}${userInformation}`);
    return data;
  }
}