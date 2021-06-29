import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Login from '../register/Login';

import './App.styl';
import RegistrationForm from "../register/Register";

function App() {
  return (
    <div className="App">
      <Login />
      <RegistrationForm />
      {/*<Router>*/}
      {/*  <div>*/}
      {/*    <nav>*/}
      {/*      <ul>*/}
      {/*        <li>*/}
      {/*          <Link to="/">Login</Link>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          <Link to="/about">About</Link>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          <Link to="/users">Users</Link>*/}
      {/*        </li>*/}
      {/*      </ul>*/}
      {/*    </nav>*/}

          {/*<Switch>*/}
          {/*  <Route path="/about" component={ Login } />*/}
          {/*  <Route path="/users" component={ Login } />*/}
          {/*  <Route path="/" component={ App } />*/}
          {/*</Switch>*/}
      {/*  </div>*/}
      {/*</Router>*/}
    </div>
  );
}

export default App;
