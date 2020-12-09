import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    paper: {
      padding: 13,  
    },
    root: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
});

class NewPostForm extends Component {

    continue = event => {
        event.preventDefault();
        this.props.submitRegistration();
        this.props.nextStep();
    }

    back = event => {
        event.preventDefault();
        this.props.prevStep();
    }

  render() {

    const { classes } = this.props;
    const {values: {title}, handleInputChange} = this.props;

    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <TextField 
                    onChange = { handleInputChange ('title') }
                    defaultValue = { title }
                    id="full-width-text-field"
                    variant = "outlined"
                    fullWidth="true"
                    label = "Title"
                    helperText = "Please enter a title pertaining to your listing."
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
            <Grid item xs={12}>
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

            <Grid item xs = {3}>
                <Button className={classes.submit}
                        variant="contained"
                        color="primary"
                        disableElevation
                        onClick={this.continue}
                >Confirm & Submit
                </Button>
              </Grid>
              <Grid item xs = {3}>
                <Button className={classes.submit}
                        variant="contained"
                        primary={false}
                        disableElevation
                        onClick={this.back}
                >Make Changes
                </Button>
              </Grid>
        </Grid>
    );
  }
}
export default withStyles ( styles, {withTheme: true}) (NewPostForm);
 