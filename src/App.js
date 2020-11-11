import React, {Component} from 'react';
import HomePage from './HomePage/HomePage.js';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="App-HomePage">
                <HomePage/>
            </div>
        </div>
    )
  }
}

export default App;
