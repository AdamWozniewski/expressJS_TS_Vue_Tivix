import React from 'react';
import { Outlet } from 'react-router-dom';

type ILayoutComponentProps = {};
export const Layout: React.FunctionComponent<ILayoutComponentProps> = () => (
  <Outlet />
);
