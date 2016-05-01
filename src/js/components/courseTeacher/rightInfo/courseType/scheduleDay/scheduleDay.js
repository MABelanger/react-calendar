"use strict";

// Vendor modules
import moment                         from 'moment';
import React                          from 'react';
import ReactDOMServer                 from 'react-dom/server';

// Project modules
import * as componentHelper           from '../../../../helper';  
import Schedule                       from './schedule/schedule';

export default class ScheduleDay extends React.Component {

  constructor(props) {
    super(props);

  }

  _renderSchedules(schedules){
    let Schedules = schedules.map( (schedule) => {
      let weekDayName = componentHelper.getWeekDayName(schedule.dayStart);
      return <Schedule 
        key={schedule._id}
        schedule={schedule}
        weekDayNameSlug={weekDayName}
        courseNameSlug={this.props.courseNameSlug}
        courseTypeSlug={this.props.courseTypeSlug}
        teacherSlug={this.props.teacherSlug}
      />;
    });
    return Schedules;
  }

  render(){
    let date = this.props.schedules[0].dayStart;
    let weekDayName = componentHelper.getWeekDayName(date);
    let Schedules = this._renderSchedules(this.props.schedules);

    return (
      <ul>
        <li className="coursed-li-day-name">
          <span className="all-label">{weekDayName}</span>
        </li>
        <ul>
          {Schedules}
        </ul>
      </ul>
    );
  }
}