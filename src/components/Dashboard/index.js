import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { PageHeader } from 'react-bootstrap';
import AuthStore from '@stores/Auth.store';

class Dashboard extends Component {
  render() {
    if (!AuthStore.isLoggedIn) {
      return <Redirect to={{ pathname: '/login' }} />;
    }

    return (
      <PageHeader>This is the dashboard.</PageHeader>
    );
  }
}

export default Dashboard;
