import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Navbar } from './Component/Navbar.js';
import {Home} from './Home.js';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
