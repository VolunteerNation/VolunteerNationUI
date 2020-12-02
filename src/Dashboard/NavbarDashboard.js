import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import logo from '../HomePage/logo.png';

export default function NavbarDashboard() {
    return (
      <div className ="MainHeader">
             <a href="/"><img src={logo} alt=""/></a>
              <Grid container spacing={4}>
              <Grid item xs={6}>
                <Button variant = "filled" color = "secondary">New Post</Button>
              </Grid>
              </Grid>
            </div>
    );
}