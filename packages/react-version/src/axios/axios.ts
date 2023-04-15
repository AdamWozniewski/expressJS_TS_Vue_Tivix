import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { AUTH, baseURL } from '../static/staticValues';

const BEARER: string = 'Bearer';

export const $http: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
$http.interceptors.request.use((config: AxiosRequestConfig) => {
  const { token }: { token: string } = JSON.parse(
    (sessionStorage.getItem(AUTH) as string) ||
      (localStorage.getItem(AUTH) as string),
  );
  // console.log(token);
  return {
    ...config,
    headers: {
      ...config.headers,
      ...(token && { Authorization: `${BEARER} ${token}` }),
    },
  };
});
