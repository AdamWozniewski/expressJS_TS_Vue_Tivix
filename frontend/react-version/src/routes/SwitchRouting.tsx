import React from 'react';
import { useSelector } from 'react-redux';
import { RouterRender } from './RouterRender';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../views/HomePage';
import { Secret } from '../views/secret/Secret';
import { WildCard} from '../views/WildCard';
import { Login } from '../views/register/Login';
import { RegistrationForm } from '../views/register/Register';

export function SwitchRouting () {
  const IS_LOGGED: boolean = false;
  const IS_ADMIN: boolean = true;
  const routes = {
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
  return (
    <Switch>
      {!IS_LOGGED ? <RouterRender routes={routes.auth} />
        : (
          <>
            <Route path='/' render={({ match: { url } }) => (
              <>
                <Route exact path='/' component={ Home }/>
                { IS_ADMIN && <Route exact path='/secret' component={ Secret } /> }
              </>
            )} />
          </>
        )
      }
      <Route path={routes.wildcards} component={ WildCard } />
    </Switch>
  )
}