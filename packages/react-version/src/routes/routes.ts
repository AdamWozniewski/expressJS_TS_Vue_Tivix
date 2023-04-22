import { Login } from '../views/Register/Login';
import { Register } from '../views/Register/Register';
import { Home } from '../views/HomePage';
import { Secret } from '../views/Secret/Secret';
import { EditProfile } from '../views/EditProfile/EditProfile';
import { WildCard } from '../views/WildCard';

export const routes: any = {
  dashboard: {
    path: '/dashboard',
    component: Home,
    children: [
      {
        path: '/edit-profile',
        component: EditProfile,
      },
      {
        path: '/Secret',
        admin: true,
        component: Secret,
      },
    ],
  },
  auth: {
    path: '/auth',
    children: [
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/registration',
        component: Register,
      },
    ],
  },
  wildcards: {
    component: WildCard,
    path: '*',
  },
};
