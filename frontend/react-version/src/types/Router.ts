import React from 'react';

type RouterChildren = {
  path: string;
  admin?: boolean,
  exact?: boolean;
  component: React.ReactNode;
};

export type Router = {
  path: string;
  admin?: boolean,
  exact?: boolean;
  component: React.ReactNode;
  children?: RouterChildren[];
};