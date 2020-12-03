import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
    root: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    icon: {
      borderRadius: '50%',
      width: 16,
      height: 16,
      boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
      backgroundColor: '#f5f8fa',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
      '$root.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
      },
      'input:hover ~ &': {
        backgroundColor: '#ebf1f5',
      },
      'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
      },
    },
    checkedIcon: {
      backgroundColor: '#137cbd',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
      },
      'input:hover ~ &': {
        backgroundColor: '#106ba3',
      },

      date_container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      dateTextField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
    },
}));

const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
          borderBottom: 0,
        },
        '&:before': {
          display: 'none',
        },
        '&$expanded': {
          margin: 'auto',
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

  function StyledRadio(props) {
    const classes = useStyles();
  
    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }

export default function NewPostForm() {

    const classes = useStyles();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField 
                    id="full-width-text-field"
                    variant = "outlined"
                    margin="normal"
                    fullWidth="true"
                    label = "Title"
                />
            </Grid>
            <Grid item xs={8}>
            <CKEditor
                    editor={ ClassicEditor }
                    data="Begin your post here..."
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
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
                            label = "Name"
                            variant = "filled"
                            disabled
                            fullWidth = "true"
                        />
                        <AccordionDetails>
                        <TextField
                            label = "Contact Number"
                            variant = "outlined"
                            fullWidth = "true"
                        />
                        </AccordionDetails>
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
                            <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
                                <FormControlLabel value="female" control={<StyledRadio />} label="Tutoring" />
                                <FormControlLabel value="male" control={<StyledRadio />} label="Food Delivery" />
                                <FormControlLabel value="other" control={<StyledRadio />} label="Grocery Pickup" />
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
                                label="Available starting at/on"
                                type="datetime-local"
                                defaultValue="2021-01-01T00:00"
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </form>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </Grid>
            <Grid item xs={12}>
                <Button variant = "contained" color = "primary">Publish</Button>
            </Grid>
        </Grid>
    )
}
 