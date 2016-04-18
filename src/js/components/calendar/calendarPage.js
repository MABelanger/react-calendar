"use strict";

import React from 'react';
import Calendar from './calendar';

export default class CalendarPage extends React.Component {
  render(){
    return (
      <div className="container" style={{backgroundColor:"#F5F5F5"}}>
        <Calendar />
      </div>
    );
  }
}
