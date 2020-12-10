import React, {Component} from 'react';
import FormDialog from '../Registration/FormDialog';
import LoginFormDialog from '../Login/LoginFormDialog';
import Grid from '@material-ui/core/Grid';
import logo from '../Images/logo.png';
import Button from '@material-ui/core/Button';
import {TokenContext} from '../token-context';
import {read_cookie} from 'sfcookies';
import {VNT_TOKEN_COOKIE} from "../Util/util";
import {useHistory} from "react-router-dom";
import AboutMenu from './AboutMenu';

function GotoDashBoard() {
  const history = useHistory();
  history.push("/Dashboard");
}

class MainHeader extends Component {

  displayButtons = () => {

    if ((read_cookie(VNT_TOKEN_COOKIE)).length < 1) {
      // if (false) {
      return (
        <Grid container spacing={5}>
          <Grid item xs={3}>
            <FormDialog/>
          </Grid>
          <Grid item xs={3}>
            <LoginFormDialog/>
          </Grid>
          <Grid item xs={6}>
            <div className = "about">
              <AboutMenu/>
            </div>
          </Grid>
        </Grid>
      )
    } else {
      return (
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Button
              style={{
                backgroundColor: "blue",
                color: "white",
              }}
              onClick={() => GotoDashBoard() }>
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
            {this.displayButtons()}
          </div>
        </div>
        <div className="HomePage-SearchBar">
          <h2 className="HomePage-Local">Welcome to VolunteerNation</h2>
        </div>
      </div>
    )
  }
}

MainHeader.contextType = TokenContext;

export default MainHeader;
