import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '@components/Header';
import Auth from '@components/Auth';
import Dashboard from '@components/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="container-fluid">
            <Header/>
            <Route path="/login" component={Auth} />
            <Route path="/signup" component={Auth} />
            <Route exact path="/" component={Dashboard} />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
