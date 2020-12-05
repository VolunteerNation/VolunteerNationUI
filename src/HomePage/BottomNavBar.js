import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Grid from '@material-ui/core/Grid'
import InfoIcon from '@material-ui/icons/Info';
import PersonIcon from '@material-ui/icons/Person';
import WarningIcon from '@material-ui/icons/Warning';
import {TokenContext} from '../token-context'; 

export default class SimpleBottomNavigation extends Component {

  state = {
    value: 0
  };

  handleChange = (event, value) => {
    console.log('Value: ' + value);
    this.setState({value: value});
    this.context.setInfo(value)
  }

  render() {
    const { value } = this.state.value;
    return (
      <Grid container spacing = {3} justify = "center">
        <Grid item xs = {12}>
          <BottomNavigation
            value={value}
            onChange={this.handleChange}
            showLabels
            >
            <BottomNavigationAction label="How can I get help?" icon={<InfoIcon/>} value="1"/>
            <BottomNavigationAction label="How can I be a volunteer?" icon={<PersonIcon/>} value="2"/>
            <BottomNavigationAction label="How can I stay safe?" icon={<WarningIcon/>} value="3"/>
          </BottomNavigation>
        </Grid>
      </Grid>
    )
  }
}
SimpleBottomNavigation.contextType = TokenContext;