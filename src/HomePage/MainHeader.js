import React, {Component} from 'react';
import HamburgerMenu from './HamburgerMenu.js';
import './MainHeader.css';
import logo from './logo.png';

class MainHeader extends Component {
    render() {
      return (
        <div class="MainHeader">
             <div class="MainHeader-Menu">
                <HamburgerMenu pages = {["Login", "Register"]}/>
            </div>
            <div class="MainHeader-Foot">
                <span><img src={logo} alt="" class="MainHeader-Logo"/></span>
                <span><h2>Subtitle</h2></span>
            </div>
        </div>   
      )
    }
}

export default MainHeader;