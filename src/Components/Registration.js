import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

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
        justifyContent: "center",
      margin: theme.spacing(3, 0, 2)
    },
  });

export class Registration extends Component {

    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    }

    render() {
        
        const { classes } = this.props;
        const { values: { firstname, lastname, email}, handleInputChange } = this.props;

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className = {classes.wrapper}>
                    <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h4">
                    Register New Account
                    </Typography>
                    <br/>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Typography variant = "subtitle" color="textPrimary">Details</Typography>
                        <Typography onClick={this.continue} variant = "subtitle"><i>User Info</i></Typography>
                        <Typography variant = "subtitle"><i>Confirmation</i></Typography>
                    </Breadcrumbs>
                    <form className = {classes.form}>
                        <h3>Personal Details</h3>
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
                                <Divider />
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
                                <FormControlLabel
                                    control={<Checkbox color="secondary" name="age" value="yes" />}
                                    label="Are you over the age of 18?"
                                    required = "true"
                                />
                            </Grid>
                            </Grid>
                            <Button className = { classes.submit }
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

export default withStyles ( styles, {withTheme: true}) (Registration);