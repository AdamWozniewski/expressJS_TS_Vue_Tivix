import $http from '../axios/axios';

const refresh = async (originalMethod: Function, args: any) =>
  await $http.post(`/auth/refresh`)
    .then(async () => await originalMethod.apply(this, args))
    .catch(error => { throw new Error(error) });

const RefreshToken = () => {
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

export default RefreshToken;
