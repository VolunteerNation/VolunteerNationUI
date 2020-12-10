import React, {useContext} from 'react';
import FormDialog from '../Registration/FormDialog';
import LoginFormDialog from '../Login/LoginFormDialog';
import Grid from '@material-ui/core/Grid';
import logo from '../Images/logo.png';
import Button from '@material-ui/core/Button';
import {TokenContext} from '../token-context';
import {read_cookie} from 'sfcookies';
import {VNT_TOKEN_COOKIE} from "../Util/util";
import {useHistory} from "react-router-dom";

export default function MainHeader(props) {

  const history = useHistory();
  const context_update = useContext(TokenContext);

  const displayButtons = () => {

    if ((read_cookie(VNT_TOKEN_COOKIE)).length < 1) {
      // if (false) {
      return (
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
      return (
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Button
              style={{
                backgroundColor: "blue",
                color: "white",
              }}
              onClick={() => history.push("/Dashboard")}>
              Dashboard
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="outlined"
                    style={{
                      backgroundColor: "#21b6ae",
                    }}
                    onClick={() => context_update.logout()}>
              Logout
            </Button>
          </Grid>
        </Grid>
      )
    }
  }

  return (
    <div className="MainHeader">
      <div className="MainHeader-Container">
        <a href="/"><img src={logo} alt=""/></a>
        <div className="MainHeader-Nav">
          {displayButtons()}
        </div>
      </div>
      <div className="HomePage-SearchBar">
        <h2 className="HomePage-Local">Welcome to VolunteerNation</h2>
        {/* <h2 className="HomePage-Local">Find Local Opportunities</h2>
          <SearchBar/> */}
      </div>
    </div>
  )
}

