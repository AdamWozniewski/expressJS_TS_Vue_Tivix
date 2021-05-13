import $http from '@/axios/axios';
import RefreshDecorator from '@/decorators/RefreshDecorator';

const staticAuthPart = '/auth';

export default class AuthService {
  static async login({ email, password }: { email: string, password: string }): Promise<object> {
    const { data } = await $http.post(`${staticAuthPart}/login`, { email, password });
    return data;
  }
  static async createUser({ first_name, last_name, email, password }: { first_name: string, last_name: string, email: string, password: string }): Promise<object> {
    const { data } = await $http.post(`${staticAuthPart}/register`, { first_name, last_name, email, password });
    return data;
  }
  static async logout() {
    await $http.post(`${staticAuthPart}/logout`);
  }
  @RefreshDecorator()
  static async getUser(): Promise<object> {
    const { data } = await $http.get(`${staticAuthPart}/user-information`);
    return data;
  }
}