import $http from '@/axios/axios';

export default class AuthService {
    static async login({ email, password }: { email: string, password: string }): Promise<object> {
        const { data } = await $http.post('/api/auth/login', { email, password });
        return data;
    }
    static async createUser({ first_name, last_name, email, password }: { first_name: string, last_name: string, email: string, password: string }): Promise<object> {
        const { data } = await $http.post('/api/auth/register', { first_name, last_name, email, password });
        return data;
    }
    static async logout() {
        await $http.post('/api/auth/logout');
    }
    static async getUser(): Promise<object> {
        const { data } = await $http.get('/api/auth/user-information');
        return data;
    }
}