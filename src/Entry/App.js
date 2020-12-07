import React, {Component} from 'react';
import HomePage from '../HomePage/HomePage.js';
import Dashboard from '../Dashboard/Dashboard.js';
import Search from '../Search/Search.js';
import TokenProvider from '../token-provider';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <TokenProvider>
        <Router>
          <Switch>
            <div className="App">
              <Route path="/" exact component={HomePage}/>
              <Route path="/Dashboard" component={Dashboard}/>
              <Route path="/Search" component={Search}/>
            </div>
          </Switch>
        </Router>
      </TokenProvider>
    )
  }
}

export default App;
