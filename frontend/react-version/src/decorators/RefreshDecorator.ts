import { $http } from '../axios/axios';

const proxy = 'http://localhost:6001';
const API_URL = `${proxy}/api`;

const refresh = async (originalMethod: Function, args: any) =>
  await $http.post(`${API_URL}/auth/refresh`)
    .then(async () => await originalMethod.apply(this, args))
    .catch(error => { throw new Error(error) });

export const RefreshToken = () => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = async (...args: any[]) => {
      try {
        return await originalMethod.apply(this, args);
      } catch (error: any) {
        const response = error.response.status;
        if (response === 401) return refresh(originalMethod, args);
        else return error;
      }
    };
  };
};
