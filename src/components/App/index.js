import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '@components/Header';
import Auth from '@components/Auth';
import Dashboard from '@components/Dashboard';
import Hiring from '@components/Hiring';
import HiringPage from '@components/HiringPage';
import Training from '@components/Training';
import '../../index.css';

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
            <Route path="/Hiring" component={Hiring} />
            <Route path="/Hiringpage" component={HiringPage} />
            <Route path="/Training" component={Training} />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
