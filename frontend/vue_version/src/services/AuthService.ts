import axios from "axios";

export default class AuthService {
    static async login({ email, pass }: { email: string, pass: string }): Promise<object> {
        const { data } = await axios.post('http://localhost:3001/api/auth/login', { email, pass })
        return data
    }
    static async createUser({ name, email, pass }: { name: string, email: string, pass: string }): Promise<object> {
        const { data } = await axios.post('api/auth/create-user', { name, email, pass })
        return data
    }
}