import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Col, Nav, NavItem } from 'react-bootstrap';
import TopNavBar from './TopNavBar';
import TABS from './tabs';
import './styles.css';

import AuthStore from '@stores/Auth.store';

class Dashboard extends Component {
  state = {
    currUrl: `${this.props.match.url}/${TABS[0].path}`,
  };

  handleTabSelect = (selectedTab) => {
    this.setState({ currUrl: selectedTab });
  }

  render() {
    const currUrl = this.props.match.url;

    if (!AuthStore.isLoggedIn) {
      return <Redirect to={{ pathname: '/login' }} />;
    }

    return (
      <div className="container-fluid">
        <TopNavBar />
        <Row className="content">
          <Col sm={2} className="sidebar">
            <Nav bsStyle="pills" stacked activeKey={this.state.currUrl} onSelect={this.handleTabSelect}>
              { TABS.map((tab) => (
                <LinkContainer to={`${currUrl}/${tab.path}`} key={`Tab-Link-${tab.name}`}>
                  <NavItem eventKey={`${currUrl}/${tab.path}`} key={`Tab-${tab.name}`}>
                    {tab.name}
                  </NavItem>
                </LinkContainer>
              )) }
            </Nav>
          </Col>
          <Col sm={10} className="currentView">
            <Route exact path={`${currUrl}`} component={() => (<Redirect to={{ pathname: `${currUrl}/${TABS[0].path}` }} />)} />
            { TABS.map((tab) => (
              <Route key={`Route-${tab.name}`} path={`${currUrl}/${tab.path}`} component={tab.component} />
            )) }
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
