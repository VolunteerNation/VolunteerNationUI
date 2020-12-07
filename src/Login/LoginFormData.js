import React, {Component} from 'react';
import LoginForm from './LoginForm';
import LoginResult from './LoginResult';
import axios from 'axios';
import {TokenContext} from '../token-context';
import {useHistory} from 'react-router-dom';
import {API_host} from "../util";
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

function LoginSuccess() {
  console.log('test login success');
  const history = useHistory();
  history.push("/Dashboard");
  return null;
}

export class LoginFormData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      email: '',
      password: '',
      success: false,
    };
  }

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

  submitLogin = () => {
    const obj = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post(`${API_host}/vnt_user/auth`, obj)
      .then(response => {
        console.log(response.data);
        console.log(this.state.email);
        const cookie_key = 'vntToken';
        bake_cookie(cookie_key, response.data);
        this.setState({success: true});
        this.context.handleLogin(response.data);
        console.log('auth succesful');
      })
      .catch(error => {
        console.log(error.response.data);
        console.log(this.state.email);
        this.context.handleErrorLogin(error.response.data);
      });
  }

  render() {
    const {step} = this.state;
    const {email} = this.state;
    const values = {email};

    switch (step) {

      case 1:
        return (
          <LoginForm
            nextStep={this.nextStep}
            handleInputChange={this.handleInputChange}
            submitLogin={this.submitLogin}
            values={values}
          />
        )

      case 2:
        console.log('Case 2 Step: ' + step );
        console.log(this.state.success);
        return (
          <div>
            <LoginResult/>
            {this.state.success && <LoginSuccess/>}
          </div>
        )

      default:
    }
  }
}

LoginFormData.contextType = TokenContext;

export default LoginFormData
