import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// Stores
import AuthStore from '@stores/Auth.store';

class App extends Component {
  _renderApp = () => {
    if (!AuthStore.isLoggedIn) {
      return <Redirect to={{ pathname: '/login' }} />;
    }

    return (
      <div className='container-fluid'>
        <h1>App part I guess</h1>
      </div>
    );
  }

  render() {
    return this.props.children || this._renderApp();
  }
}

export default App;
