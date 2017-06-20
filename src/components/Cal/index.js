import styles from 'react-big-calendar/lib/css/react-big-calendar.css'
import React, { Component } from 'react';
import events from './events.js'
import Basic from './Basic';
import Timeslots from './TimeSlots';
import Selectable from './Selectable';
import { Redirect } from 'react-router-dom';
import { Grid, Row, Col, Nav, NavItem } from 'react-bootstrap';

import AuthStore from '@stores/Auth.store';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css'
let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

/*
const Cal = props => (
  <div>
    <BigCalendar
      events={events}
      startAccessor='startDate'
      endAccessor='endDate'
      style={{height: 700}}
    />
  </div>
);
*/

class Cal extends Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      activeTab: 'basic',
    };
  }


  handleTabSelect = (selectedTab) => {
    this.setState({ activeTab: selectedTab });
  };

  renderForm = () => {
    if (this.state.activeTab === 'timeslots') return <timeslots/>;
    return <Basic/>;
  };


  render() {
    return (
      <div>
      <Row>
        <NavItem eventKey={'basic'} href="basic">Basic</NavItem>
        <NavItem eventKey={'selectable'} href="selectable">Selectable</NavItem>
        <NavItem eventKey={'timeslots'} href="timeslots">TimeSlots</NavItem>
      </Row>
      <Row>
      <BigCalendar
            {...this.props}
            events={events}
            views={allViews}
            defaultDate={new Date(2017, 3, 1)}
            style={{height: 700}}
            />
            </Row>
        </div>

      );
    }
}

/*

class Cal extends Component{


  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'basic',
    };
  }

  handleTabSelect = (selectedTab) => {
    this.setState({ activeTab: selectedTab });
  };

  renderForm = () => {
    if (this.state.activeTab === 'selectable') return <Selectable/>;
    return <Basic/>;
  };

  render(){
    if (AuthStore.isLoggedIn) {
      return <Redirect to={{ pathname: '/' }} />;
    }

    return (
      <div className='container-fluid'>
        <Grid>
          <Row>
            <Nav bsStyle="tabs" activeKey={this.state.activeTab} onSelect={this.handleTabSelect}>
              <NavItem eventKey={'basic'} href="basic">Basic</NavItem>
              <NavItem eventKey={'selectable'} href="selectable">Selectable</NavItem>
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
/*
const Cal = props => (
  <div>
    <BigCalendar
      events={events}
      startAccessor='startDate'
      endAccessor='endDate'
      style={{height: 700}}
    />
  </div>
);
*/
export default Cal;
