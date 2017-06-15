import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, Row, Col, Nav, NavItem } from 'react-bootstrap';
import Login from './Login';
import Signup from './Signup';
import AuthStore from '@stores/Auth.store';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'login',
    };
  }

  handleTabSelect = (selectedTab) => {
    this.setState({ activeTab: selectedTab });
  };

  renderForm = () => {
    if (this.state.activeTab === 'signup') return <Signup/>;
    return <Login/>;
  };

  render() {
    if (AuthStore.isLoggedIn) {
      return <Redirect to={{ pathname: '/' }} />;
    }

    return (
      <div className='container-fluid'>
        <Grid>
          <Row>
            <Nav bsStyle="tabs" activeKey={this.state.activeTab} onSelect={this.handleTabSelect}>
              <NavItem eventKey={'login'} href="login">Login</NavItem>
              <NavItem eventKey={'signup'} href="signup">Signup</NavItem>
            </Nav>
          </Row>
          <Row>
            <Col>{ this.renderForm() }</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Auth;
