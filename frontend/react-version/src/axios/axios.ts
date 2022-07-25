import axios, { AxiosRequestConfig } from 'axios';

export const $http = axios.create({
  baseURL: 'http://localhost:6001/api',
});
$http.interceptors.request.use((config: AxiosRequestConfig) => ({
  ...config,
  headers: {
    ...config.headers,
    // Authorization: `Bearer ${
    //   JSON.parse(<string>sessionStorage.getItem('auth')).token
    // }`,
  },
}));
