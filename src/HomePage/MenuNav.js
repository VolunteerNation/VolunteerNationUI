import React from 'react';
import FormDialog from './FormDialog';
import LoginFormDialog from './LoginFormDialog';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function CustomizedMenus() {

  return (
      <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
          <FormDialog/>
          </Grid>
          <Grid item xs={12} sm={6}>
          <LoginFormDialog/>
          </Grid>
      </Grid>
  );
}
