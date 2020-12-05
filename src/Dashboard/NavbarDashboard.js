import React from 'react';
import Grid from '@material-ui/core/Grid';
import logo from '../HomePage/logo.png';
import NewPostControl from './NewPostControl';

export default function NavbarDashboard() {
    return (
<div className ="MainHeader">
          <div className = "MainHeader-Container">
             <a href="/"><img src={logo} alt=""/></a>
            <div className = "MainHeader-Nav">
              <Grid container spacing={4}>
              <Grid item xs={12}>
              <NewPostControl/>
              </Grid>
              </Grid>
            </div>
          </div>
          </div>
    );
}