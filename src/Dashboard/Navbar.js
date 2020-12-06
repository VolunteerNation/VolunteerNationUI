import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import BurgerMenu from './BurgerMenu';
import NewPostControl from './NewPostControl';
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
          <Grid container spacing={12}>
            <Grid item xs={8}>
              <NewPostControl/>
            </Grid>
            <Grid item xs={4}>
              <BurgerMenu pages = {["Search", "Profile"]}/>
            </Grid>
          </Grid>        
        </div>
      </div>
    )
  }
}

export default Navbar;
