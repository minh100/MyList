import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './Component/Navbar.js';
import { Home } from './Home.js';
import { GlobalProvider } from './Global/GlobalState.js';
import { MyList } from './Component/MyList.js';
import { Viewmore } from './Pages/Viewmore.js';
import { Footer } from './Component/Footer.js';

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/mylist" component={MyList} />

          <Route path="/upcoming" component={() =>
            <Viewmore
              title="Upcoming"
              url="https://kitsu.io/api/edge/anime?filter[status]=upcoming,unreleased&#38;sort=-userCount&#38;page[limit]=20"   // upcoming

            />
          } />

          <Route path="/trending now" component={() =>
            <Viewmore
              title="Trending Now"
              url="https://kitsu.io/api/edge/anime?filter[status]=current&#38;sort=popularityRank&#38;page[limit]=20"           // trending

            />
          } />

          <Route path="/all time top" component={() =>
            <Viewmore
              title="All Time Top"
              url="https://kitsu.io/api/edge/anime?sort=popularityRank&#38;page[limit]=20"                                      // all time top
            />
          } />

        </Switch>

        <Footer />
      </GlobalProvider>
    </Router>
  );
}

export default App;
