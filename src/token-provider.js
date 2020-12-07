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
    infoChoice: '0',
    postsCreated: 0,
    volunteered: 0 
  };

  setInfo = (infoType) => {
    if (infoType !== this.state.infoChoice) {
      this.setState({infoChoice: infoType});
    } else {
      this.setState({infoChoice: '0'});
    }
  }

  updatePostsCreated = () => {
    console.log("UpdatePostCalled");
    let count = (this.state.postsCreated) + 1;
    this.setState({postsCreated: count})
  }

  updateVolunteered = () => {
    console.log("UpdateVolunteered Called");
    let count = (this.state.volunteered) + 1;
    this.setState({volunteered: count})
  }

  setToken = (token) => {
    this.setState({token: token});
  }

  handleNewToken = (newToken, newUsername) => {
    this.setState({token: newToken});
    this.setState({username: newUsername});
    this.setState({regsuccess: true});
    let msg = newUsername + ' has been registered.';
    this.setState({responseMessage: msg});
    const cookie_key = 'vntToken';
    bake_cookie(cookie_key, newToken);
  }

  handleLogin = (token, callback) => {
    this.setState({token: token})
    this.setState({loginsuccess: true});
    let msg = "Login Successful";
    this.setState({loginMessage: msg});
    const cookie_key = 'vntToken';
    bake_cookie(cookie_key, token);
    // console.log("cookie baked: ");
    // console.log(read_cookie(cookie_key));
  }

  logout = () => {
    const cookie_key = 'vntToken';
    console.log('logging out')
    console.log("cookie read: ");
    console.log(read_cookie(cookie_key));
    delete_cookie(cookie_key);
    this.setState({
      token: null,
      username: null,
      regsuccess: false,
      loginsuccess: false,
      responseMessage: "Attempting to Register",
      loginMessage: "Attempting to Login",
      infoChoice: '0'
    })
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
      setToken: this.setToken,
      logout: this.logout,
      updatePostsCreated: this.updatePostsCreated,
      updateVolunteered: this.updateVolunteered
    }}>
      {this.props.children}
    </TokenContext.Provider>
  }
}

export default TokenProvider;
