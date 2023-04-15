import { $https } from '../fetch/fetch';
import { localhostApi } from '../static/static';

const refresh = async (originalMethod: Function, args: any) =>
  await $https
    .post(`${localhostApi}/auth/refresh`)
    .then(async () => await originalMethod.apply(this, args))
    .catch((error) => {
      throw new Error(error);
    });

export const RefreshToken = () => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = async (...args: any[]) => {
      try {
        return await originalMethod.apply(this, args);
      } catch (error) {
        const response = error.response.status;
        if (response === 401) return refresh(originalMethod, args);
        else return error;
      }
    };
  };
};
