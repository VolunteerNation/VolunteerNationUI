import React, {Component} from 'react';
import HomePage from './HomePage/HomePage.js';
import { FormData } from './Components/FormData';
import './App.css';

class App extends Component {
  render() {
    return (
        <div class="App">
            <div class="App-HomePage">
                <HomePage/>
                <FormData />
            </div>
        </div>
    )
  }
}

export default App;
