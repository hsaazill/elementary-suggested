import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import SignUp from './pages/SignUp.js';


const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={HomePage}/>
      <Route path="/" exact component={SignUp}/>
    </Router>

  );
};

export default Routes;
