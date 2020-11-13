import React, { Component } from 'react';
import Switch from 'react-switch';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {TokenContext} from '../token-context';

const styles = theme => ({
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
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
        display: "none"
    }
  });

  /* class PasswordInput extends Component {
    render() {
      return <TextField type="password" {...this.props} />;
    }
  }
  
  PasswordInput.propTypes = {
    classes: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.func.isRequired,
  };
  
  PasswordInput = withStyles(styles)(PasswordInput); */

export class Registration extends Component {
    state = {
        checked: false
    }

    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    }

    back = event => {
        event.preventDefault();
        this.props.prevStep();
    }

    toggleChecked(checked) {
        this.setState({ checked });
    }

    toggleChecked = this.toggleChecked.bind(this);

    render() {
        
        const { classes } = this.props;
        const { values: { firstname, lastname, email, username}, handleInputChange} = this.props;
        
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className = {classes.wrapper}>
                    <form className = {classes.form}>
                        <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>  
                                    <TextField 
                                    required id = "standard-required" 
                                    fullWidth
                                    label = "First name"
                                    variant = "outlined"
                                    onChange = { handleInputChange ('firstname') }
                                    defaultValue = { firstname }
                                    autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField 
                                    required id = "standard-required" 
                                    label = "Last name"
                                    variant = "outlined"
                                    onChange = { handleInputChange ('lastname') }
                                    defaultValue = { lastname }
                                />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField 
                                    required id = "standard-required" 
                                    fullWidth
                                    label = "E-mail address"
                                    variant = "outlined"
                                    onChange = { handleInputChange ('email') }
                                    defaultValue = { email }
                                    />
                                </Grid>
                                <Grid item xs={12}>  
                                    <TextField 
                                    required id = "standard-required" 
                                    fullWidth
                                    label = "Username"
                                    variant = "outlined"
                                    onChange = { handleInputChange ('username') }
                                    defaultValue = { username }
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
                                        onChange = { handleInputChange ('password') }
                                        InputProps={{
                                            endAdornment: (
                                              <InputAdornment position="end">
                                              </InputAdornment>
                                            ),
                                          }}
                                        autoComplete="current-password"
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
                                        onChange = { handleInputChange ('password2') }
                                        autoComplete="current-password"
                                    />
                                </Grid>
                                <Typography variant = "subtitle">Password must contain at least one special character and one capital letter.</Typography>
                            
                                <Grid item xs={12}>
                                {/* <FormControlLabel
                                    control={<Checkbox color="secondary" name="age" value="yes"/>}
                                    onChange = { this.context.swap18(this.context.over18)}
                                    label="Are you over the age of 18?"
                                    required = "true"
                                /> */}
                                <FormControlLabel
                                    control={<Switch size="small" checked={this.state.checked} onChange={this.toggleChecked} />}
                                    label="Are you over the age of 18?"
                                    labelPlacement="start"
                                    />
                            </Grid>
                            </Grid>
                            <Button className = {this.state.checked ? classes.submit : classes.hidden}
                                type = "submit"
                                variant = "contained"
                                color = "primary"
                                fullWidth
                                primary = {true}
                                disableElevation
                                onClick = {this.continue}
                            >Continue
                            </Button>
                    </form>
                </div>
            </Container>
        );
    }
}
Registration.contextType = TokenContext;

export default withStyles ( styles, {withTheme: true}) (Registration);