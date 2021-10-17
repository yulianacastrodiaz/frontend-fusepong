import './App.css';
import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import { Route } from "react-router-dom";
import Login from './components/Login/Login';

function App() {
  return (
    <React.Fragment>
      <Route
        exact path='/login'
      >
        <Login />
      </Route>
      <Route
        exact path='/'
      >
        <LandingPage />
      </Route>
    </React.Fragment>
  );
}

export default App;
