import styles from 'react-big-calendar/lib/css/react-big-calendar.css'
import React, { Component } from 'react';
import events from './events.js'
import { Redirect } from 'react-router-dom';
import { Grid, Row, Col, Nav, NavItem, ButtonGroup, Button, DropdownButton, MenuItem } from 'react-bootstrap';

import AuthStore from '@stores/Auth.store';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css'
let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer




class Cal extends Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectable: true,
      //activeTab: 'basic',
    };
  }


  render() {
    return (
      <div>
      <Row>
      <BigCalendar
            {...this.props}
            selectable
            events={events}
            views={allViews}
            scrollToTime={new Date(1970, 1, 1, 6)}
            defaultDate={new Date(2017, 3, 1)}
            onSelectEvent={event => alert(event.title)} //add event here
            onSelectSlot={(slotInfo) => alert(
              `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
              `\nend: ${slotInfo.end.toLocaleString()}`
            )}
            style={{height: 700}}
            />
            </Row>
        </div>

      );
    }
}




export default Cal;
