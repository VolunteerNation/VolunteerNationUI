import React from 'react';
import FormDialog from '../Registration/FormDialog';
import LoginFormDialog from '../Login/LoginFormDialog';
import Grid from '@material-ui/core/Grid';

export default function MenuNav() {

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
