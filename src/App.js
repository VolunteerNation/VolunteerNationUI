import React, {Component} from 'react';
import MainHeader from './MainHeader.js';
import SearchBar from './SearchBar.js';
import HomePageCarousel from './HomePageCarousel.js';
import logo from './logo.svg';
import './App.css';
import { Divider } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <div class="App">
        <div class="App-Header">
          <MainHeader/>
        </div>
        <p class="App-Local">Find Local Opportunities</p>
        <div>
          <SearchBar/>
        </div>
        <div>
          <HomePageCarousel/>
        </div>
        <p>Lorem ipsum</p>
        <div>Navbar</div>
      </div>
    )
  }
}

export default App;
