import React, {Component} from 'react';
import covid from './covid.jpg';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {withStyles} from '@material-ui/core/styles';

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
  hide: {
    display: "none"
  },
  submit: {
    justifyContent: "center",
    margin: theme.spacing(3, 0, 2)
  },
  paper: {
    padding: 20,
    direction: "column",
    alignItems: "center",
    justify: "center",
  },
});

export class COVIDConfirm extends Component {

  state = {
    checked: false
  }
  toggleChecked = this.toggleChecked.bind(this);

  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  }

  toggleChecked(checked) {
    this.setState({checked});
  }

  render() {

    return (
      <Grid container spacing={2}>
        <img src={covid} alt="" style={{width: '100%'}}/>
        <Grid item xs={10} style={{paddingTop: 20}}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.checked}
                  onChange={this.toggleChecked}
                  name="checked"
                  color="primary"
                />
              }
              label="I have read and understand what precautions to take to keep myself safe."
            />
          </FormGroup>
        </Grid>
        <Grid item xs={2} style={{paddingTop: 20}}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disableElevation
            onClick={this.continue}
          >Continue
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles, {withTheme: true})(COVIDConfirm)
