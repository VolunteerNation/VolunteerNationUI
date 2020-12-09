import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import MaskedInput from 'react-text-mask'
import Location from './Location';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 370,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  paper: {
    padding: 20,
    width: 700,
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    paddingBottom: 30,
  },
  submit: {
    justifyContent: "center",
    margin: theme.spacing(3, 0, 2)
  },

  hidden: {
    display: 'none',
  }
});

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export class PostAttributes extends Component {

  state = {
    value: 0,
    checked: false
  }

  toggleChecked = (checked) => {
    this.setState({checked});
  }

  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  }

  back = event => {
    event.preventDefault();
    this.props.prevStep();
  }

  render() {
    const {classes} = this.props;
    const {values: {fname, lastinital, street, city, state, zipcode, phone}, handleInputChange} = this.props;

    const handleChange = (e, newValue) => {
      this.setState({value: newValue});
    };

    return (
      <Grid container spacing={2}>
        <Grid item xs>
          <div className={classes.root}>

            <Tabs
              fullWidth="true"
              orientation="vertical"
              variant="scrollable"
              value={this.state.value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              <Tab label="Poster Details" {...a11yProps(0)} />
              <Tab label="Post Type" {...a11yProps(1)} />
              <Tab label="Post Availability" {...a11yProps(2)} />
              <Tab label="Communication" {...a11yProps(3)} />
            </Tabs>


            <TabPanel fullWidth="true" value={this.state.value} index={0}>
              <Paper variant="outlined" elevation={0} className={classes.paper}>
                <Typography><b>Enter Name</b></Typography>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <TextField
                      className={classes.container}
                      helperText="First name"
                      fullWidth="true"
                      onChange={handleInputChange('fname')}
                      defaultValue={fname}
                    /></Grid>
                  <Grid item xs={4}>
                    <TextField
                      className={classes.container}
                      helperText="Last letter initial"
                      onChange={handleInputChange('lastinital')}
                      defaultValue={lastinital}
                    /></Grid></Grid>
                <Typography><b>Enter Personal Address</b></Typography>
                <Grid container spacing={2}>
                  <Grid item xs>
                    <TextField
                      className={classes.container}
                      helperText="Street name"
                      onChange={handleInputChange('street')}
                      defaultValue={street}
                    /></Grid>
                  <Grid item xs>
                    <TextField
                      className={classes.container}
                      helperText="City"
                      onChange={handleInputChange('city')}
                      defaultValue={city}
                    /></Grid>
                  <Grid item xs>
                    <TextField
                      className={classes.container}
                      helperText="State"
                      onChange={handleInputChange('state')}
                      defaultValue={state}
                    /></Grid>
                  <Grid item xs>
                    <TextField
                      className={classes.container}
                      helperText="Zipcode"
                      onChange={handleInputChange('zipcode')}
                      defaultValue={zipcode}
                    /></Grid>
                </Grid>
                <Typography><b>Enter Volunteer Location</b></Typography>
                <Location/>
              </Paper>
            </TabPanel>


            <TabPanel value={this.state.value} index={1}>
              <Paper variant="outlined" elevation={0} className={classes.paper}>
                <Typography><b>Select Category</b></Typography>
                <FormControl component="fieldset">
                  <RadioGroup aria-label="types" name="customized-radios">
                    <FormControlLabel
                      value="tutoring"
                      control={<Radio color="primary"/>}
                      label="Tutoring"
                    />
                    <FormControlLabel value="food" control={<Radio color="primary"/>} label="Food Delivery"/>
                    <FormControlLabel value="grocery" control={<Radio color="primary"/>} label="Grocery Pickup"/>
                  </RadioGroup>
                </FormControl>
              </Paper>
            </TabPanel>


            <TabPanel value={this.state.value} index={2}>
              <Paper variant="outlined" elevation={0} className={classes.paper}>
                <Typography><b>Choose Starting Point</b></Typography>
                <form className={classes.container} noValidate>
                  <TextField
                    id="datetime-local"
                    helperText="Available starting on | at"
                    type="datetime-local"
                    defaultValue="2020-12-01T00:00"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </form>
                <Typography><b>Select Status</b></Typography>
                <FormControl component="fieldset">
                  <RadioGroup aria-label="types" name="customized-radios">
                    <FormControlLabel value="available" control={<Radio color="primary"/>} label="Available"/>
                    <FormControlLabel value="inprogress" control={<Radio color="primary"/>} label="In Progress"/>
                  </RadioGroup>
                </FormControl>
              </Paper>
            </TabPanel>


            <TabPanel value={this.state.value} index={3}>
              <Grid item xs className={classes.container}>
                <Paper variant="outlined" elevation={0} className={classes.paper}>
                  <Typography><b>Enter Preferred Contact</b></Typography>
                  <MaskedInput
                    mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    className='form-control'
                    onChange={handleInputChange('phone')}
                    defaultValue={phone}
                  />
                </Paper>
              </Grid>
              <Grid item xs>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  primary={true}
                  disableElevation
                  onClick={this.continue}
                >Continue
                </Button>
              </Grid>
            </TabPanel>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles, {withTheme: true})(PostAttributes);
