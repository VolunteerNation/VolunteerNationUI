import React, {Component} from 'react';
import MenuNav from './MenuNav';
import logo from './logo.png';
import SearchBar from './SearchBar.js';

class MainHeader extends Component {
    render() {
      return (
        <div className ="MainHeader">
          <div className = "MainHeader-Container">
             <a href="/"><img src={logo} alt=""/></a>
            <div className = "MainHeader-Nav">
              <MenuNav/>
            </div>
          </div>
        <div className="HomePage-SearchBar">
        <h2 className="HomePage-Local">Find Local Opportunities</h2>
          <SearchBar/>
        </div>
        </div>   
      )
    }
}

export default MainHeader;
