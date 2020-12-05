import {TokenContext} from './token-context';
import React from 'react';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

class TokenProvider extends React.Component {
  state = {
    token: null,
    username: null,
    regsuccess: false,
    loginsuccess: false,
    responseMessage: "Attempting to Register",
    loginMessage: "Attempting to Login",
    infoChoice: '0'
  };

  setInfo = (infoType) => {
    console.log('InfoType: ' + infoType)
    if (infoType !== this.state.infoChoice) {
      this.setState({infoChoice: infoType});
    } else {
      this.setState({infoChoice: '0'});
    }
  }

  handleNewToken = (newToken, newUsername) => {
    console.log('handle new token called with token: ' + newToken);
    this.setState({token: newToken});
    this.setState({username: newUsername});
    this.setState({regsuccess: true});
    let msg = newUsername + ' has been registered.';
    this.setState({responseMessage: msg});
  }

  handleLogin = (token, callback) => {
    console.log('handle login called with: ' + token);
    this.setState({token: token})
    this.setState({loginsuccess: true});
    let msg = "Login Successful";
    this.setState({loginMessage: msg});
  }

  handleErrorMessage = (errorList) => {
    if (Array.isArray(errorList)) {
      if (errorList.length > 0) {
        this.setState({responseMessage: errorList[0].msg});
      }
    }
  }

  handleErrorLogin = (error) => {
    if (error) {
      this.setState({loginMessage: error.msg});
    }
  }

  render() {
    return <TokenContext.Provider value={{
      ...this.state,
      handleNewToken: this.handleNewToken,
      handleLogin: this.handleLogin,
      handleErrorMessage: this.handleErrorMessage,
      handleErrorLogin: this.handleErrorLogin,
      setInfo: this.setInfo,
    }}>
      {this.props.children}
    </TokenContext.Provider>
  }
}

export default TokenProvider;
