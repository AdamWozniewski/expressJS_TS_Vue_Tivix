import $http from './../axios/axios';
import { authErr, authSuccess } from './dispatchers/auth';
import { routes } from '../routes/routes';

const { apiUser, login, registration } = routes;

export const auth = (username: string, password: string) => (dispatch: Function) =>
  $http
    .post(`${apiUser}${login}`, {
      username,
      password
    })
    .then(data => dispatch(authSuccess(data)))
    .catch(err => dispatch(authErr(err)));

export const register = (username: string, password: string) => (dispatch: Function) =>
  $http
    .post(`${apiUser}${registration}`, {
      username,
      password
    })
    .then(data => dispatch(authSuccess(data)))
    .catch(err => dispatch(authErr(err)));
