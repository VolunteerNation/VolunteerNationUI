import React, {Component} from 'react';
import HomePage from './HomePage/HomePage.js';
import TokenProvider from './token-provider';
import './App.css';

class App extends Component {
  render() {
    return (
        <TokenProvider>
          <div className="App">
              <div className="App-HomePage">
                  <HomePage/>
              </div>
          </div>
        </TokenProvider>
    )
  }
}

export default App;
