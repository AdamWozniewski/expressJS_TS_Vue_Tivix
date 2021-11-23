import { Login } from '../views/register/Login';
import { RegistrationForm } from '../views/register/Register';
import { Home } from '../views/HomePage';
import { Secret } from '../views/secret/Secret';

export const apiRouter = {
  login: '/login',
  logout: '/logout',
  register: '/register',
  userInformation: '/user-information',
};

export const routes = {
  logged: {
    path: '/',
    children: [{
      path: '/',
      exact: true,
      component: Home,
    }, {
      path: '/secret',
      admin: true,
      exact: true,
      component: Secret,
    }],
  },
  auth: {
    path: '/auth',
    children: [{
      path: '/login',
      exact: true,
      component: Login
    }, {
      path: '/registration',
      exact: true,
      component: RegistrationForm
    }]
  },
  wildcards: '*',
};
