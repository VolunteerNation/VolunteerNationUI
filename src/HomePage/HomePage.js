import React, {Component} from 'react';
import MainHeader from './MainHeader.js';
import HomePageCarousel from './HomePageCarousel.js';
import BottomNavBar from './BottomNavBar.js';
import DisplayInfo from './DisplayInfo.js';
import {TokenContext} from '../token-context';
import {read_cookie} from 'sfcookies';
import './HomePage.css';

class HomePage extends Component {

  componentDidMount() {
    if (this.context.token === null) {
      const cookie_key = 'vntToken';
      const saved_token = read_cookie(cookie_key);
      if (saved_token !== undefined) {
        this.context.setToken(saved_token);
      }
    }
  }

  render() {
    return (
      <div className="HomePage">
        <div className="HomePage-Header">
          <MainHeader/>
        </div>
        <div className="HomePage-Carousel">
          <HomePageCarousel/>
        </div>
        <p className="HomePage-Description">Users of VolunteerNation can create posts to describe their needs or sign-up
          to
          volunteer to meet the needs of other users. Stay safe during the COVID-19 pandemic by coordinating volunteer
          work
          electronically using VolunteerNation.</p>
        <div className="HomePage-BottomNav">
          <BottomNavBar/>
        </div>
        <DisplayInfo/>
      </div>
    )
  }
}

HomePage.contextType = TokenContext;

export default HomePage;
