import React, { Component } from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    wrapper: {
      textAlign: "center",
      marginTop: theme.spacing(4),
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
  });

export class Confirmation extends Component {

    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    }

    back = event => {
        event.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { classes } = this.props;
        const { values: { firstname, lastname, email }} = this.props;

        return (
          <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className = {classes.wrapper}>
                    <Typography component="h1" variant="h4">
                    Confirm Your Info
                    </Typography>
                    <br/>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Typography variant = "subtitle"><i>Details</i></Typography>
                        <Typography variant = "subtitle"><i>User Info</i></Typography>
                        <Typography variant = "subtitle" color = "textPrimary"><b>Confirmation</b></Typography>
                    </Breadcrumbs>
                    <form className = {classes.form}>
                        <h3>Personal Details</h3>
                        <Grid container spacing={2}>
                                <Grid item xs={12} sm = {6}>  
                                    <TextField 
                                    disabled
                                    variant = "filled"
                                    fullWidth
                                    label = "First name"
                                    defaultValue = {firstname}
                                    />
                                </Grid>

                                <Grid item xs={12} sm = {6}>  
                                    <TextField 
                                    disabled
                                    variant = "filled"
                                    fullWidth
                                    label = "Last name"
                                    defaultValue = {lastname}
                                    />
                                </Grid>

                                <Grid item xs={12}>  
                                    <TextField 
                                    disabled
                                    variant = "filled"
                                    fullWidth
                                    label = "E-mail address"
                                    defaultValue = {email}
                                    />
                                </Grid>
                          </Grid>

              <Grid container spacing = {2}>
              <Grid item xs={12} sm={6}>
              <Button className = {classes.submit}
                  variant = "contained"
                  color = "primary"
                  disableElevation
                  onClick = {this.continue}
              >Confirm & Submit
              </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
              <Button className = {classes.submit}
                  variant = "contained"
                  primary = {false}
                  disableElevation
                  onClick = {this.back}
              >Make Changes
              </Button>
              </Grid>
              </Grid>
        </form>
        </div>
        </Container>
        );
    }
}

export default withStyles ( styles, {withTheme: true}) (Confirmation)