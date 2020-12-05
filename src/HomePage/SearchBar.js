import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Toolbar>
          <InputBase placeholder="Find Local Opportunities" />
      </Toolbar>
      <Button variant = "contained" color = "secondary" disableElevation>Search!</Button>
    </form>
  );
}
