import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PageHeader } from 'react-bootstrap';
import AuthStore from '@stores/Auth.store';
import { observer } from 'mobx-react';

@observer class Login extends Component {
  static displayName = 'Login';

  onLogin() {
  	AuthStore.logIn();
  }

  render() {
  	console.log('re render');
  	if (AuthStore.isLoggedIn) {
  		return <Redirect to={{ pathname: '/' }} />;
  	}

    return (
      <PageHeader>
        <button onClick={this.onLogin}>
        	Log In
        </button>
      </PageHeader>
    );
  }
}

export default Login;

