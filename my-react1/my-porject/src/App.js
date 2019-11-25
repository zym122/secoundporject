import React from 'react';
import Alayout from './layout/Alayout/Alayout'
import './App.css';
import Login from './components/login'

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/nav">
            <Alayout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch><Redirect to="/nav/nav1" />
      </Router>
    </div>
  );
}

export default App;
