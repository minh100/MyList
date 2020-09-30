import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './Component/Navbar.js';
import { Home } from './Home.js';
import { GlobalProvider } from './Global/GlobalState.js';
import { MyList } from './Component/MyList.js';

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/mylist">
            <MyList />
          </Route>
        </Switch>

      </GlobalProvider>
    </Router>
  );
}

export default App;
