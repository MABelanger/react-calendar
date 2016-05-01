"use strict";

// Vendor modules
import React                          from 'react';

// Project modules
import CalendarComponent              from '../components/calendar/calendar';

export default class Calendar extends React.Component {
  render(){
    return (
      <div className="container" style={{backgroundColor:"#F5F5F5"}}>
        <CalendarComponent />
      </div>
    );
  }
}