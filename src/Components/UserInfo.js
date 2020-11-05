import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
    wrapper: {
      marginTop: theme.spacing(8),
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
        alignItems: "center",
        justifyContent: "center",
        margin: theme.spacing(3, 0, 2)
    },
  });

export class UserInfo extends Component {

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
        const { values: { username, password}, handleInputChange } = this.props;

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className = {classes.wrapper}>
                    <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h4">
                    Setup User Info
                    </Typography>
                    <br/>
                    <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant = "subtitle" onClick={this.back}><i>Details</i></Typography>
                        <Typography color = "textPrimary"variant = "subtitle"><b>User Info</b></Typography>
                        <Typography variant = "subtitle"><i>Confirmation</i></Typography>
                    </Breadcrumbs>
                    <form className = {classes.form}>
                        <h3>User Details</h3>
                        <Grid container spacing={2}>
                                <Grid item xs={12}>  
                                    <TextField 
                                    required id = "standard-required" 
                                    fullWidth
                                    label = "Username"
                                    variant = "outlined"
                                    onChange = { handleInputChange ('username') }
                                    defaultValue = { username }
                                    autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm = {6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        InputProps={{
                                            endAdornment: (
                                              <InputAdornment position="end">
                                              </InputAdornment>
                                            ),
                                          }}
                                        autoComplete="current-password"
                                        defaultValue = {password}
                                    />
                                </Grid>
                                <Grid item xs={12} sm = {6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        name="password"
                                        label="Confirm Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                </Grid>
                                <Typography variant = "subtitle">Password must contain at least one special character and one capital letter.</Typography>
                            </Grid>
                            <Grid container spacing = {2}>
              <Grid item xs={12} sm={6}>
              <Button className = {classes.submit}
                  variant = "contained"
                  color = "primary"
                  disableElevation
                  onClick = {this.continue}
              >Review Submission
              </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
              <Button className = {classes.submit}
                  variant = "contained"
                  primary = {false}
                  disableElevation
                  onClick = {this.back}
              >Previous
              </Button>
              </Grid>
              </Grid>
                    </form>
                </div>
            </Container>
        );
    }
}

export default withStyles ( styles, {withTheme: true}) (UserInfo);