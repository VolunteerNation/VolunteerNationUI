import React, {Component} from 'react';
import MainHeader from './MainHeader.js';
import SearchBar from './SearchBar.js';
import HomePageCarousel from './HomePageCarousel.js';
import BottomNavBar from './BottomNavBar.js';
import { Divider } from '@material-ui/core';
import './HomePage.css';

class HomePage extends Component {
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
      <div class="HomePage">
        <div class="HomePage-Header">
          <MainHeader/>
        </div>
        <h2 class="HomePage-Local">Find Local Opportunities</h2>
        <div class="HomePage-SearchBar">
          <SearchBar/>
        </div>
        <div class="HomePage-Carousel">
          <HomePageCarousel/>
        </div>
        <p class="HomePage-Description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem praesentium excepturi perferendis neque obcaecati voluptates, harum, modi reiciendis rerum corporis animi, libero numquam et esse dolorem suscipit hic repellendus molestias!</p>
        <div class="HomePage-BottomNav">
          <BottomNavBar/>
        </div>
      </div>
    )
  }
}

export default HomePage;
