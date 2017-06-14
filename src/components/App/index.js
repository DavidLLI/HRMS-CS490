import React, { Component } from 'react';
// Components
import Login from '../auth/Login';

class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Login />
      </div>
    );
  }
}

export default App;
