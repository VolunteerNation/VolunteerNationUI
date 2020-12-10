import React, {Component} from 'react';
import MainHeader from './MainHeader.js';
import HomePageCarousel from './HomePageCarousel.js';
import {TokenContext} from '../token-context';
import {read_cookie} from 'sfcookies';
import './HomePage.css';
import {VNT_TOKEN_COOKIE} from "../Util/util";

class HomePage extends Component {

  componentDidMount() {
    if (this.context.token === null) {
      const cookie_key = VNT_TOKEN_COOKIE;
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
      </div>
    )
  }
}

HomePage.contextType = TokenContext;

export default HomePage;
