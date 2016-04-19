"use strict";

import React from 'react';

import * as scheduleApi from './api/scheduleApi';
import Day from './day/day';

import './styles.scss';

export default class Schedule extends React.Component {

  eachDay(day, i) {
    var courses = day;
    return (
      <Day
        key={i}
        courses={courses}
      />
    );
  }

  eachHeader(header, i) {
    return (
      <th key={i} className="cal day-name">{header}</th>
    );
  }

  getHeaders(schedule){
    return ScheduleApi.getHeaders(schedule);
  }

  getDays(schedule){
    //return ScheduleApi.getDays(schedule);
  }

  render(){
    let scheduleDays = scheduleApi.getScheduleDays(this.props.courses);

    return (
      <div className="schedule col-sm-9" >
        <table className="cal">
          <thead>
            <tr className="cal">
              {scheduleApi.getHeaders(scheduleDays).map(this.eachHeader)}
            </tr>
          </thead>
          <tbody>
            <tr className="cal">
              {scheduleDays.map(this.eachDay)}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
