import {TokenContext} from './token-context';
import React from 'react';

class TokenProvider extends React.Component {
    state = {
      token: null,
      username: null,
      regsuccess: false,
      responseMessage: "Unknown error.",
    };
  
    handleNewToken = (newToken, newUsername) => {
      this.setState({token: newToken});
      this.setState({username: newUsername});
      this.setState({regsuccess: true});
      let msg = newUsername + ' has been registered.';
      this.setState({responseMessage: msg});
    }

    handleErrorMessage = (errorList) => {
        if (Array.isArray(errorList)) {
            if (errorList.length > 0) {
                this.setState({responseMessage: errorList[0].msg});
            }
        }
    }

    render() {
      return <TokenContext.Provider value={{
        ...this.state,
        handleNewToken: this.handleNewToken,
        handleErrorMessage: this.handleErrorMessage,
      }}>
        {this.props.children}
      </TokenContext.Provider>
    }
  }

  export default TokenProvider;