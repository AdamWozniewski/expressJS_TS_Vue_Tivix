import { $http } from '../axios/axios';
import { UNAUTHORIZED } from '../static/staticValues';

const refresh = async (originalMethod: Function, args: any) =>
  await $http
    .post(
      `/auth/refresh`,
      {},
      {
        headers: {
          Authorization: `Bearer ${() =>
            JSON.parse(
              <string>sessionStorage.getItem('auth') ||
                <string>localStorage.getItem('auth'),
            ).refreshToken}`,
        },
      },
    )
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
      } catch (error: any) {
        const response = error.response.status;
        if (response === UNAUTHORIZED) return refresh(originalMethod, args);
        else return error;
      }
    };
  };
};