import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import axios from 'axios';
import {TokenContext} from '../token-context';
import {API_host} from "../util";
import covid from './covid.jpg';
import { conforms } from 'lodash';
import { read_cookie } from 'sfcookies';

const styles = theme => ({
    paper: {
      padding: 13,  
    },
    root: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
      hidden: {
        display: "none"
      }
    },
});

const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&$expanded': {
          margin: '200',
        },
      },
      expanded: {},
    })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    rootv2: {
      backgroundColor: 'white',
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);

class NewPostForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      firstName: '',
      lastName: '',
      description: '',
      category: '',
      city: '',
      state: '',
      completionStatus: "Awaiting Completion",
      completionDate: '',
    };
    
    this.publish = this.publish.bind(this);
  }

  publish() {
    console.log(this.state);
    console.log('publish called');
    if(this.state.title && this.state.firstName && this.state.lastName && this.state.description && this.state.category && this.state.city && this.state.state && this.state.completionDate) {
      const data = {
        firstName: this.state.firstName,
        lastInitial: this.state.lastName.charAt(0),
        assignedVolunteer: "null",
        description: this.state.description,
        category: this.state.category,
        city: this.state.city,
        state: this.state.state,
        completionStatus: this.state.completionStatus,
        completionDate: this.state.completionDate,
      };

      console.log("testing token for post submission:");
      console.log(read_cookie('vntToken'));
      
      axios.post(`${API_host}/vnt_post/create`, data, { headers: {"auth-token":read_cookie('vntToken')}}, )
        .then(response => {
          console.log(response.data);
          this.context.updatePostsCreated();
          this.props.onClickPublish();
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  }

  handleInputChange = input => (event) => {
    this.setState({[input]: event.target.value});
  }

  render() {

    const { classes } = this.props;

    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <TextField 
                    id="full-width-text-field"
                    variant = "outlined"
                    fullWidth="true"
                    label = "Title"
                    helperText = "Please enter a title pertaining to your listing."
                    onChange = {this.handleInputChange('title')}
                />
            </Grid>
            <Grid item xs = {4}>
                <Paper elevation = {0} variant="outlined" className = {classes.paper}>
                <Typography><b>Post URL Preview:</b></Typography>
                <Typography color = "primary" align = "center"> 
                    <i>www.volunteer-nation.com/postID</i>
                </Typography>
                </Paper>
            </Grid>
            <Grid item xs={8}>
            <CKEditor
                    editor={ ClassicEditor }
                    data="Begin your post here..."
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        // console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        // console.log( { event, editor, data } );
                        this.setState({description:data.substring(3, data.length - 4)});
                        // console.log(this.state);
                    } }
                    onBlur={ ( event, editor ) => {
                        // console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        // console.log( 'Focus.', editor );
                    } }
                />
            </Grid>
            <Grid item xs = {4}>
                <div>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-label="Expand"
                        aria-controls="additional-actions1-content"
                        id="additional-actions1-header"
                        >
                        <Typography>Poster Details</Typography>
                        </AccordionSummary>
                        <TextField
                            label = "First Name"
                            variant = "filled"
                            fullWidth = "true"
                            onChange = {this.handleInputChange('firstName')}
                        />
                        <TextField
                            label = "Last Name"
                            variant = "filled"
                            fullWidth = "true"
                            onChange = {this.handleInputChange('lastName')}
                        />
                        <AccordionSummary className = "rootv2">
                        <Typography><i>Communication Method</i></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <FormControl component="fieldset">
                            <RadioGroup aria-label="contact" name="customized-radios">
                                <FormControlLabel value="phone" control={<Radio color = "primary" />} label = "In Person"/>
                                <FormControlLabel value="throughapp" control={<Radio color = "primary" />} label="Contact-free" />
                            </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                        <TextField
                            label = "Phone number"
                            variant = "filled"
                            fullWidth = "true"
                        />
                        <TextField
                            label = "City"
                            variant = "filled"
                            fullWidth = "true"
                            onChange = {this.handleInputChange('city')}
                        />
                        <TextField
                            label = "State"
                            variant = "filled"
                            fullWidth = "true"
                            onChange = {this.handleInputChange('state')}
                        />
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography>Post Type</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Category</FormLabel>
                            <RadioGroup aria-label="types" name="customized-radios" onChange = {this.handleInputChange('category')}>
                                <FormControlLabel value="Tutoring" control={<Radio color = "primary" />} label="Tutoring" />
                                <FormControlLabel value="Food Delivery" control={<Radio color = "primary" />} label="Food Delivery" />
                                <FormControlLabel value="Grocery Pickup" control={<Radio color = "primary" />} label="Grocery Pickup" />
                                <FormControlLabel value="Yardwork" control={<Radio color = "primary" />} label="Yardwork" />
                            </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography>Post Availability</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <form className={classes.container} noValidate>
                            <TextField
                                id="datetime-local"
                                label="Available starting on/at"
                                type="datetime-local"
                                defaultValue="2021-01-01T00:00"
                                className={classes.textField}
                                onChange = {this.handleInputChange('completionDate')}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </form>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography>COVID-19 Safety</Typography>
                        </AccordionSummary>
                        
                    </Accordion>
                </div>
            </Grid>
            <Grid item xs = {12}>
                <Paper elevation = {0} variant="outlined" className = {classes.paper}>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography><b>COVID-19 Safety Regulations</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <img src={covid} alt="" className = {classes.covid}/>
                         </AccordionDetails>
                        <AccordionDetails>
                            <form className={classes.container} Validate>
                              <Checkbox/>
                              <Typography>Please acknowledge that you have read and 
                                understand the guidelines for COVID-19 Safety as depicted in the graphic.
                              </Typography>
                            </form>
                        </AccordionDetails>
                    </Accordion>
                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Button variant = "contained" color = "primary" onClick = {this.publish}>Publish</Button>
            </Grid>
        </Grid>
    );
  }
}
NewPostForm.contextType = TokenContext;

export default withStyles ( styles, {withTheme: true}) (NewPostForm);
 