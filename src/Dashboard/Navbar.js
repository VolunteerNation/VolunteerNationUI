import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import BurgerMenu from './BurgerMenu';
import NewPostControl from './NewPostControl';
import logo from '../Images/logo.png';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="Navbar-Logo">
          <a href="/"><img src={logo} alt=""/></a>
        </div>
        <div className="Navbar-Menu">
          <Grid container spacing={12}>
            <Grid item xs={8}>
              <NewPostControl/>
            </Grid>
            <Grid item xs={4}>
              {/* <BurgerMenu pages={["Dashboard", "Search", "Profile"]}/> */}
              <BurgerMenu pages={["Dashboard", "Search"]}/>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Navbar;
