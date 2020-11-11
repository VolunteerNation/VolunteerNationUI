import React, { Component } from 'react';
import Registration from './Registration';
import Confirmation from './Confirmation';

export class FormData extends Component{
    
    state = {
        step: 1,
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        street: '',
        city: '',
        state: '',
        zipcode: ''
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

    render() {
        const { step } = this.state;
        const { firstname, lastname, username, email, password, street, city, state, zipcode } = this.state;
        const values = { firstname, lastname, username, email, password, street, city, state, zipcode };
        
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
                    values = {values}
                    />
                )

            default:
        }
    }
}

export default FormData
