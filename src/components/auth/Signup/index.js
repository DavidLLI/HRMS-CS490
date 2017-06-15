import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

class Signup extends Component {
  static displayName = 'Login';

  render() {
    return (
      <PageHeader>
        Signup <small>This is a signup page headermhm.</small>
      </PageHeader>
    );
  }
}

export default Signup;
