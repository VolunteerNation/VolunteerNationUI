import React, {Component} from 'react';
import MainHeader from './MainHeader.js';
import HomePageCarousel from './HomePageCarousel.js';
import BottomNavBar from './BottomNavBar.js';
import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="HomePage-Header">
          <MainHeader/>
        </div>
        <div className="HomePage-Carousel">
          <HomePageCarousel/>
        </div>
        <p className="HomePage-Description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem praesentium excepturi perferendis neque obcaecati voluptates, harum, modi reiciendis rerum corporis animi, libero numquam et esse dolorem suscipit hic repellendus molestias!</p>
        <div className="HomePage-BottomNav">
          <BottomNavBar/>
        </div>
      </div>
    )
  }
}

export default HomePage;
