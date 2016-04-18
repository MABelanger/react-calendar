"use strict";

import React from 'react';

import Day from './day/day';


export default class Schedule extends React.Component {

  eachDay(day, i) {
    var courses = day
    return (
      <Day 
        courses={courses}
        logos={this.props.logos}
      />
    );
  }

  eachHeader(header, i) {
    return (
      <th className="cal day-name">{header}</th>
    );
  }

  getHeaders(schedule){
    //return ScheduleApi.getHeaders(schedule);
  }

  getDays(schedule){
    //return ScheduleApi.getDays(schedule);
  }

  render(){
    return (
      <div className="schedule col-sm-9" >
        <table className="cal">
          <tr className="cal">
            {this.getHeaders(this.props.schedule).map(this.eachHeader)}
          </tr>
          <tr className="cal">
            {this.getDays(this.props.schedule).map(this.eachDay)}
          </tr>
        </table>
      </div>
    );
  }
}
