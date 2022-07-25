import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SwitchRouting } from '../../routes/SwitchRouting';
import { BasicModal } from '../../components/modals/BasicModal';
import { useUtilities } from '../../hooks/useUtilities';
import { logoutUser } from '../../store/reducers/userReducer';
import AuthService from '../../services/AuthService';
import './../../i18n/index';
import { EditProfile } from '../editProfile/EditProfile';
import { Login } from '../register/Login';

type IAppProps = {};
export const App: React.FunctionComponent<IAppProps> = () => {
  const { t, i18n } = useTranslation();
  const { dispatch } = useUtilities();
  const getUser = async () => {
    const user = await AuthService.getUser();
    console.log(user);
  };
  const logoutUserFromApp = async () =>
    await AuthService.logout().then(() => dispatch(logoutUser()));
  return (
    <div>
      <button onClick={() => i18n.changeLanguage('pl')}>Zmiana na PL</button>
      <button onClick={() => i18n.changeLanguage('en')}>Zmiana na EN</button>
      <h2>{t('welcome')}</h2>
      <button onClick={() => logoutUserFromApp()}>logout</button>
      <button onClick={() => getUser()}>getUser</button>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/auth/login">Login</Link>
            </li>
            <li>
              <Link to="/auth/registration">Registration</Link>
            </li>
          </ul>
        </nav>
        <SwitchRouting />
        <BasicModal />
        <EditProfile />
        <hr />
        <Login />
      </>
    </div>
  );
};
