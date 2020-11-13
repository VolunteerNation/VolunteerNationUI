import React, { Component } from 'react';
import LoginForm from './LoginForm';
import LoginResult from './LoginResult';
import axios from 'axios';
import { TokenContext } from '../token-context';

export class LoginFormData extends Component{
    
    state = {
        step: 1,
        email: '',
        password: '',
    };

    nextStep = () => {
        const {step} = this.state;
        this.setState({ step: step+1 });
    }

    prevStep = () => {
        const {step} = this.state;
        this.setState({ step: step-1 });
    }

    handleInputChange = input => (event) => {
        this.setState({[input]:event.target.value});
    }

    submitLogin = () => {
        const obj = {
            email: this.state.email,
            password: this.state.password
        };

        axios.post('https://volunteernation-api.herokuapp.com/vnt_user/auth', obj)
        .then(response => {
            console.log(response.data);
            console.log(this.state.email);
            this.context.handleNewToken(response.data,this.state.email);
        })
        .catch(error => {
            console.log(error.response.data[0]);
            this.context.handleErrorMessage(error.response.data);
        });
    }

    render() {
        const { step } = this.state;
        const { email } = this.state;
        const values = { email };
        
        switch ( step ) {

            case 1:
                return (
                    <LoginForm 
                    nextStep = {this.nextStep}
                    handleInputChange = {this.handleInputChange}
                    submitLogin = {this.submitLogin}
                    values = {values}
                    />
                )

            case 2:
                return (
                <LoginResult
                    prevStep = {this.prevStep}
                    nextStep = {this.nextStep}
                    handleInputChange = {this.handleInputChange}
                    values = {values}
                    />
                )

            default:
        }
    }
}
LoginFormData.contextType = TokenContext;

export default LoginFormData
