import React, {Component} from 'react';
import HamburgerMenu from './HamburgerMenu.js';
import './MainHeader.css';
import logo from './logo.png';

class MainHeader extends Component {
    render() {
      return (
        <div className="MainHeader">
             <div className="MainHeader-Menu">
                <HamburgerMenu/>
            </div>
            <div className="MainHeader-Foot">
                <span><img src={logo} alt="" className="MainHeader-Logo"/></span>
                <span><h2>Subtitle</h2></span>
            </div>
        </div>   
      )
    }
}

export default MainHeader;
