import React, {Component} from 'react';
import Registration from './Registration';
import Confirmation from './Confirmation';
import RegResult from './RegResult';
import axios from 'axios';
import {TokenContext} from '../token-context';
import {API_host} from "../Util/util";

export class FormData extends Component {

  state = {
    step: 1,
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    password: '',
    password2: '',
  };

  nextStep = () => {
    const {step} = this.state;
    this.setState({step: step + 1});
  }

  prevStep = () => {
    const {step} = this.state;
    this.setState({step: step - 1});
  }

  handleInputChange = input => (event) => {
    this.setState({[input]: event.target.value});
  }

  submitRegistration = () => {
    const obj = {
      name: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    axios.post(`${API_host}/vnt_user/register`, obj)
      .then(response => {
        console.log(response.data);
        console.log(this.state.username);
        this.context.handleNewToken(response.data, this.state.username);
      })
      .catch(error => {
        console.log(error.response.data[0]);
        this.context.handleErrorMessage(error.response.data);
      });
  }

  render() {
    const {step} = this.state;
    const {firstname, lastname, username, email, street, city, state, zipcode} = this.state;
    const values = {firstname, lastname, username, email, street, city, state, zipcode};

    switch (step) {

      case 1:
        return (
          <Registration
            nextStep={this.nextStep}
            handleInputChange={this.handleInputChange}
            values={values}
          />
        )

      case 2:
        return (
          <Confirmation
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleInputChange={this.handleInputChange}
            submitRegistration={this.submitRegistration}
            values={values}
          />
        )

      case 3:
        return (
          <RegResult
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleInputChange={this.handleInputChange}
            values={values}
          />
        )

      default:
    }
  }
}

FormData.contextType = TokenContext;

export default FormData
