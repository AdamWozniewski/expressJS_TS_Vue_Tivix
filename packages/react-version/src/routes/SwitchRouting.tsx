import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../views/HomePage';
import { WildCard } from '../views/WildCard';
import { Login } from '../views/Register/Login';
import { Register } from '../views/Register/Register';
import { routes } from './routes';
import { EditProfile } from '../views/EditProfile/EditProfile';
import { Secret } from '../views/Secret/Secret';

type ISwitchRoutingProps = {
  language: string;
};
export const SwitchRouting: FC<ISwitchRoutingProps> = () => {
  // const IS_LOGGED: boolean = useSelector((state: any) => state.user);
  const IS_LOGGED: boolean = true;
  const IS_ADMIN: boolean = true;

  return (
    <Routes>
      <Route
        path={'/'}
        index
        element={<Navigate to={IS_LOGGED ? `/dashboard` : '/auth/login'} />}
      />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/registration" element={<Register />} />
      <Route path="/dashboard" element={<Home />}>
        <Route path="/dashboard/edit-profile" element={<EditProfile />} />
        {IS_ADMIN && <Route path="/dashboard/secret" element={<Secret />} />}
      </Route>
      <Route path={routes.wildcards.path} element={<WildCard />} />
    </Routes>
  );
};

// withRouter(LanguageSwitcher);
// https://codesandbox.io/s/6yzqv37v8z?file=/src/index.js
