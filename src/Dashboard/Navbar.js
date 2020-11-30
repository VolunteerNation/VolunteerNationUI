import React, {Component} from 'react';
import logo from '../HomePage/logo.png';

class Navbar extends Component {
    render() {
      return (
        <div className ="Navbar">
          <img src={logo} alt=""/>
        </div>   
      )
    }
}

export default Navbar;