import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import events from '../events';
import 'react-big-calendar/lib/css/react-big-calendar.css';


let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])



class Basic extends Component{

  render(){

    return (
      <BigCalendar
        {...this.props}
        events={events}
        views={allViews}
        defaultDate={new Date(2017, 3, 1)}
      />
    )
  }
}

export default Basic;
