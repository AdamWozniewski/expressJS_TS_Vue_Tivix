import React from 'react';
import { Layout } from './Layout';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

type IHomeProps = {};
export const Home: React.FunctionComponent<IHomeProps> = () => {
  // const IS_ADMIN: boolean = useSelector((state: any) => state.user);
  const IS_ADMIN: boolean = true;
  return (
    <div>
      <h1>Hello</h1>
      <div>Linki dashboard:</div>
      <Link to="/dashboard/edit-profile">Edit-profile</Link> {` | `}
      {IS_ADMIN && <Link to="/dashboard/secret">Secret</Link>}
      <Layout />
    </div>
  );
};
