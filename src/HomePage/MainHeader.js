import React, {Component} from 'react';
import FormDialog from '../Registration/FormDialog';
import LoginFormDialog from '../Login/LoginFormDialog';
import Grid from '@material-ui/core/Grid';
import logo from './logo.png';
import SearchBar from './SearchBar.js';
import Button from '@material-ui/core/Button';
import {TokenContext} from '../token-context';

class MainHeader extends Component {
  constructor(props) {
    super(props);

    this.displayButtons = this.displayButtons.bind(this);
  }

  displayButtons() {
    if (this.context.token === null) {
      return(
        <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <FormDialog/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LoginFormDialog/>
        </Grid>
      </Grid>
      ) 
    } else {
      return(
        <Grid container spacing={4}>
           <Grid item xs={12} sm={6}>
            <Button  
                style={{
                  backgroundColor: "blue",
                  color: "white",
              }}
            onClick={() => window.location = "/dashboard"}>
            Dashboard
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Button variant="outlined" 
                style={{
                  backgroundColor: "#21b6ae",
              }}
            onClick={() => this.context.logout()}>
            Logout
          </Button>
        </Grid>
      </Grid>
      )
    }
  }

  render() {
    return (
      <div className="MainHeader">
        <div className="MainHeader-Container">
          <a href="/"><img src={logo} alt=""/></a>
          <div className="MainHeader-Nav">
            { this.displayButtons() }
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
MainHeader.contextType = TokenContext;

export default MainHeader;
