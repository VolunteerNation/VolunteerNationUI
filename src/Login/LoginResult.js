import React, { Component } from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {TokenContext} from '../token-context';

const styles = theme => ({
    wrapper: {
      textAlign: "center",
      marginTop: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
    form: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    submit: {
      justifyContent: "center",
      margin: theme.spacing(3, 0, 2)
    },
    hidden: {
        display:'none',
    }
  });

export class LoginResult extends Component {
    render() {
        const { classes } = this.props;

        return (
          <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className = {classes.wrapper}>
                    <Typography component="h1" variant="h5">
                    {this.context.loginMessage}
                    </Typography>
        </div>
        </Container>
        );
    }
}
LoginResult.contextType = TokenContext;

export default withStyles ( styles, {withTheme: true}) (LoginResult)