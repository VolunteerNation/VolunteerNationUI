import React, {Component} from 'react';
import FormDialog from '../Registration/FormDialog';
import LoginFormDialog from '../Login/LoginFormDialog';
import Grid from '@material-ui/core/Grid';
import logo from './logo.png';
import SearchBar from './SearchBar.js';

class MainHeader extends Component {
    render() {
      return (
        <div className ="MainHeader">
          <div className = "MainHeader-Container">
             <a href="/"><img src={logo} alt=""/></a>
            <div className = "MainHeader-Nav">
              <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <FormDialog/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LoginFormDialog/>
              </Grid>
              </Grid>
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
