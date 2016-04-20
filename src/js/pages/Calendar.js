"use strict";

import React from 'react';
import CalendarComponent from '../components/calendar/calendar';

export default class Calendar extends React.Component {
  render(){
    return (
      <div className="container" style={{backgroundColor:"#F5F5F5"}}>
        <CalendarComponent />
      </div>
    );
  }
}
