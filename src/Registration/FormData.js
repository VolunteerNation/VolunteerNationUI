import React, { Component } from 'react';
import Registration from './Registration';
import Confirmation from './Confirmation';
import RegResult from './RegResult';
import axios from 'axios';

export class FormData extends Component{
    
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
        regsuccess: false,
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
        this.setState({[input]:event.target.value})
    }

    submitRegistration = () => {
        const obj = {
            name: "TestUser10",
            email: "test@test10.com",
            password: "Password1@",
            password2: "Passw"
        };

        axios.post('https://volunteernation-api.herokuapp.com/vnt_user/register', obj, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => { 
	        console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        });
    }

    render() {
        const { step } = this.state;
        const { firstname, lastname, username, email, street, city, state, zipcode } = this.state;
        const values = { firstname, lastname, username, email, street, city, state, zipcode };
        
        switch ( step ) {

            case 1:
                return (
                    <Registration 
                    nextStep = {this.nextStep}
                    handleInputChange = {this.handleInputChange}
                    values = {values}
                    />
                )

            case 2:
                return (
                <Confirmation 
                    prevStep = {this.prevStep}
                    nextStep = {this.nextStep}
                    handleInputChange = {this.handleInputChange}
                    submitRegistration = {this.submitRegistration}
                    values = {values}
                    />
                )

            case 3:
                return (
                <RegResult
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

export default FormData
