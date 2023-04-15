import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
// import { RouterRender } from './RouterRender';
import { Home } from '../views/HomePage';
// import { Secret } from '../views/secret/Secret';
import { WildCard } from '../views/WildCard';
// import { Login } from '../views/register/Login';
// import { RegistrationForm } from '../views/register/Register';
import { Layout } from '../views/Layout';

type ISwitchRoutingProps = {
  language: string;
};
export const SwitchRouting: FC<ISwitchRoutingProps> = () => {
  const IS_LOGGED = useSelector((state: any) => state.user);
  console.log(IS_LOGGED);
  const IS_ADMIN: boolean = true;
  const routes = {
    logged: {
      path: '/',
      children: [
        {
          path: '/',
          exact: true,
          // component: Home,
        },
        {
          path: '/secret',
          admin: true,
          exact: true,
          // component: Secret,
        },
      ],
    },
    auth: {
      path: '/auth',
      children: [
        {
          path: '/login',
          exact: true,
          // component: Login
        },
        {
          path: '/registration',
          exact: true,
          // component: RegistrationForm
        },
      ],
    },
    wildcards: '*',
  };
  return (
    <Routes>
      {/*<Route path={'/'} element={<Layout />}>*/}
      <Route path={'/'} element={<Navigate replace to={`/:lang(en|fr)`} />}>
        {/*  {!IS_LOGGED ? <RouterRender path={routes.auth} element />*/}
        {/*    : (*/}
        {/*      <>*/}
        {/*        <Route path='/' render={({ match: { url } }) => (*/}
        {/*          <>*/}
        {/*            <Route exact path='/' component={ Home }/>*/}
        {/*            { IS_ADMIN && <Route exact path='/secret' component={ Secret } /> }*/}
        {/*          </>*/}
        {/*        )} />*/}
        {/*      </>*/}
        {/*    )*/}
        {/*  }*/}
        <Route path="/" element={<Home />} />
        <Route path={routes.wildcards} element={<WildCard />} />
      </Route>
    </Routes>
  );
};

// withRouter(LanguageSwitcher);
// https://codesandbox.io/s/6yzqv37v8z?file=/src/index.js
