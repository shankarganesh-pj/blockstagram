import React from 'react';
import * as blockstack from 'blockstack'

class SigninButton  extends React.Component {

  onCl (evt) {
      evt.preventDefault();
      blockstack.redirectToSignIn();  
  }

  render() {
    return (
      <a onClick={this.onCl} id="signin-button" class="button is-primary">sign in</a>
    );
  }
}

export default SigninButton;