"use strict";
import moment from 'moment';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import ScheduleDay from './scheduleDay/scheduleDay';

import * as componentHelper       from '../../../helper';  

import './styles.scss';

export default class RightInfo extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  // add moment
  _getRangeDates(schedules){
    let dayStart = schedules[0].dayStart;
    let dayEnd = schedules[0].dayEnd;

    schedules.map( (schedule) => {
      if( dayEnd < schedule.dayEnd ){
        dayEnd = schedule.dayEnd;
      }

      if( schedule.dayStart < dayStart ){
        dayStart = schedule.dayStart;
      }

    });
  }

  _renderScheduleDays(scheduleDays){
    let ScheduleDays = scheduleDays.map( (schedules) => {
      if(schedules.length > 0){
        return <ScheduleDay schedules={schedules} />
      }
    });
    return ScheduleDays;
  }

  render(){
    if(this.props.courseType){
      let courseType = this.props.courseType;

      // a list of schedule to 2d array of the week day
      // [{}, {}, {}] -> [0][{},{}], [1][{},{}] ... [6][{},{}]
      let groupByDays = componentHelper.groupByDays(courseType.schedules);

      // order by hours the group by days 
      let scheduleDays = groupByDays.map( function(groupByDay){
        return componentHelper.sortByHours(groupByDay);
      });
  
      console.log('scheduleDays', scheduleDays)

      let rangeDates = "";//this._renderRangeDates(start, end);

      return (
        <div>
          <div class="all-label ">
            {courseType.name}:
          </div>
          <div class="tab ">
            {rangeDates}
            {this._renderScheduleDays(scheduleDays)}
          </div>
        </div>
      );
    } else {
      return(<div></div>);
    }
  }
}


