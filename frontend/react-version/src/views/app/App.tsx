import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SwitchRouting } from '../../routes/SwitchRouting';
import { BasicModal } from '../../components/modals/BasicModal';
import './../../i18n/index';
import { useUtilities } from '../../hooks/useUtilities';
import { logoutUser } from '../../store/reducers/userReducer';
import AuthService from '../../services/AuthService';

function App() {
  const { t, i18n } = useTranslation();
  const { dispatch } = useUtilities();
  const getUser = async () => {
    const user = await AuthService.getUser();
    console.log(user);
  }
  return (
    <div>
      <button onClick={() => i18n.changeLanguage('pl')}>ABC</button>
      <h2>{t('welcome')}</h2>
      <button onClick={() => dispatch(logoutUser())}>logout</button>
      <button onClick={() => getUser()}>getUser</button>
      <Router>
        <>
          <nav>
            <ul>
              <li>
                <Link to='/auth/login'>Login</Link>
              </li>
              <li>
                <Link to='/auth/registration'>Registration</Link>
              </li>
            </ul>
          </nav>
          <SwitchRouting />
          <BasicModal />
        </>
      </Router>
    </div>
  );
}

export default App;
