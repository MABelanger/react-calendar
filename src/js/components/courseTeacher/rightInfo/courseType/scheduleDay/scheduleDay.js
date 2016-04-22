"use strict";
import moment from 'moment';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as componentHelper       from '../../../../helper';  

import Schedule from './schedule/schedule';

export default class ScheduleDay extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  _renderSchedules(schedules){
    let Schedules = schedules.map( (schedule) => {
      return <Schedule key={schedule._id} schedule={schedule} />;
    });
    return Schedules;
  }

  render(){
    let date = this.props.schedules[0].dayStart;
    let weekDayName = componentHelper.getWeekDayName(date);
    let Schedules = this._renderSchedules(this.props.schedules);

    return (
      <ul>
        <li class="coursed-li-day-name">
          <span class="all-label">{weekDayName}</span>
        </li>
        <ul>
          {Schedules}
        </ul>
      </ul>
    );
  }

}


