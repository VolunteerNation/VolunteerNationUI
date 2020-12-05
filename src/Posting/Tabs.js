import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
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
import FormLabel from '@material-ui/core/FormLabel';
import Location from './Location';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 280,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  paper: {
    padding: 20,
  },
  container: {
      paddingBottom: 30,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        fullWidth = "true"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Poster Details" {...a11yProps(0)} />
        <Tab label="Post Type" {...a11yProps(1)} />
        <Tab label="Post Availability" {...a11yProps(2)} />
        <Tab label="Communication" {...a11yProps(3)} />
      </Tabs>


      <TabPanel fullWidth = "true" value={value} index={0}>
            <Paper variant = "outlined" elevation = {0} className = {classes.paper}>
                <Typography><b>Enter Name</b></Typography>
                <TextField
                    className={classes.container}
                    fullWidth = "true"
                    helperText = "First and last letter initial"
                />
                <Typography><b>Enter Location</b></Typography>
                <Location/>
            </Paper>
      </TabPanel>


      <TabPanel value={value} index={1}>
      <Paper variant = "outlined" elevation = {0} className = {classes.paper}>
      <Typography><b>Select Category</b></Typography>
      <FormControl component="fieldset">
        <RadioGroup aria-label="types" name="customized-radios">
            <FormControlLabel value="tutoring" control={<Radio color = "primary" />} label="Tutoring" />
            <FormControlLabel value="food" control={<Radio color = "primary" />} label="Food Delivery" />
            <FormControlLabel value="grocery" control={<Radio color = "primary" />} label="Grocery Pickup" />
        </RadioGroup>
       </FormControl>
       </Paper>
      </TabPanel>


      <TabPanel value={value} index={2}>
      <Paper variant = "outlined" elevation = {0} className = {classes.paper}>
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
            <FormControlLabel value="available" control={<Radio color = "primary" />} label="Available" />
            <FormControlLabel value="inprogress" control={<Radio color = "primary" />} label="In Progress" />
        </RadioGroup>
       </FormControl>
       </Paper>
      </TabPanel>


      <TabPanel value={value} index={3}>
      <Paper variant = "outlined" elevation = {0} className = {classes.paper}>
      <Typography><b>Select Contact Method</b></Typography>
      <FormControl className={classes.container} component="fieldset">
        <RadioGroup aria-label="contact" name="customized-radios">
            <FormControlLabel value="phone" control={<Radio color = "primary" />} label = "In Person"/>
            <FormControlLabel value="throughapp" control={<Radio color = "primary" />} label="Contact-free" />
        </RadioGroup>
        </FormControl>
        <Typography><b>Enter Preferred Contact</b></Typography>
            <TextField
                helperText = "Standard US Number"
                fullWidth = "true"
            />
        </Paper>
      </TabPanel>
      </div>
  );
}
