import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Hitsofoka from './pages/Hiditra';
import Hiditrampika from './pages/Mpikambana';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/Fab-accueille/">
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/h-Mpikambana" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Ho Mpikamabana</NavLink>
                <NavLink exact to="/hiditra" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Hiditra Kaonty</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/h-Mpikambana" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Ho Mpikambana</NavLink> sa <NavLink exact to="/hiditra" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Hiditra</NavLink>
              </div>

              <Route exact path="/hiditra" component={Hitsofoka}>
              </Route>
              <Route path="/h-Mpikambana" component={Hiditrampika}>
              </Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
