import React, {Component} from 'react';
import BurgerMenu from './BurgerMenu';
import logo from '../HomePage/logo.png';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="Navbar-Logo">
          <img src={logo} alt=""/>         
        </div>
        <div className="Navbar-Menu">
          <BurgerMenu pages = {["Search", "Profile"]}/>        
        </div>
      </div>
    )
  }
}

export default Navbar;
