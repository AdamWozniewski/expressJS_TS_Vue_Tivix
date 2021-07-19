import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import RegistrationForm from '../register/Register';
import Login from '../register/Login';
import Home from '../HomePage';
import WildCard from '../WildCard';
import { useTranslation } from 'react-i18next';
import './../../i18n/index';
// import { routesArray } from '../../routes/routes';
import './App.styl';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <button onClick={() => i18n.changeLanguage('pl')}>ABC</button>
      <h2>{t('welcome')}</h2>
      <Router>
        <div>
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

          <Switch>

            {/*{ routesArray.map(route => {*/}
            {/*  const RouteComponent = route.component*/}
            {/*  return (*/}
            {/*    <Route exact path={`${route.path}`} component={ RouteComponent } />*/}
            {/*  );*/}
            {/*}) }*/}
            <Route exact path="/" component={ Home } />
            <Route path="/auth" render={({ match: { url } }) => (
              <>
                <Route path={`/auth/login`} component={ Login } />
                <Route path={`/auth/registration`} component={ RegistrationForm } />
              </>
            )} />
            <Route exact path="*" component={ WildCard } />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
