import React, {Component} from 'react';
import MenuNav from './MenuNav';
import './MainHeader.css';
import logo from './logo.png';

class MainHeader extends Component {
    render() {
      return (
        <div className ="MainHeader">
             <div className="MainHeader-Logo">
             <span><a href="/"><img src={logo} alt="" class="MainHeader-Logo"/></a></span>
             <div className = "MainHeader-Nav">
                <MenuNav/>
             </div>
            </div>
            <div class="MainHeader-Foot">
                <span><h2>Help Us, Help You</h2></span>
            </div>
        </div>   
      )
    }
}

export default MainHeader;