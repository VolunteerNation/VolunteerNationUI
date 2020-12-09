import React, {Component} from 'react';
import COVIDConfirm from './COVIDConfirm';
import NewPost from './NewPost';
import PostAttributes from './PostAttributes';

export class PostFormData extends Component {

  state = {
    step: 1,
    firstname: '',
    lastinital: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    tutoring: '',
    delivery: '',
    grocery: '',
    time: '',
    status: '',
    contact: '',
    phone: '',
    title: '',
    textdata: ''
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

  render() {
    const {step} = this.state;
    const {
      fname,
      lastinital,
      street,
      city,
      state,
      zipcode,
      tutoring,
      delivery,
      grocery,
      phone,
      title,
      textdata
    } = this.state;
    const entries = {
      fname,
      lastinital,
      street,
      city,
      state,
      zipcode,
      tutoring,
      delivery,
      grocery,
      phone,
      title,
      textdata
    };

    switch (step) {

      case 1:
        return (
          <COVIDConfirm
            nextStep={this.nextStep}
          />
        )

      case 2:
        return (
          <PostAttributes
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleInputChange={this.handleInputChange}
            values={entries}
          />
        )

      case 3:
        return (
          <NewPost
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleInputChange={this.handleInputChange}
            values={entries}
          />
        )

      default:
    }
  }
}

export default FormData
