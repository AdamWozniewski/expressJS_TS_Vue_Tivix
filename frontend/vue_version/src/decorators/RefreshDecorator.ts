import $http from '@/axios/axios';

const RefreshToken = () => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = async (...args: any[]) => {
      try {
        return await originalMethod.apply(this, args);
      } catch (e) {
        await $http.post(`/auth/refresh`);
      }
      return await originalMethod.apply(this, args);
    };
  };
};

export default RefreshToken;
