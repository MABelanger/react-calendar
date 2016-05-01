"use strict";

// Vendor modules
import moment                         from 'moment';
import React                          from 'react';
import ReactDOMServer                 from 'react-dom/server';

// Project modules
import ScheduleDay                    from './scheduleDay/scheduleDay';
import * as componentHelper           from '../../../helper';  

// Project styles
import './styles.scss';

export default class RightInfo extends React.Component {

  constructor(props) {
    super(props);
  }

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
    let courseTypeSlug = this.props.courseType.slug;
    let ScheduleDays = scheduleDays.map( (schedules, index) => {
      if(schedules.length > 0){
        return <ScheduleDay
          key={index}
          schedules={schedules}
          courseTypeSlug={courseTypeSlug}
          courseNameSlug={this.props.courseNameSlug}
          teacherSlug={this.props.teacherSlug}
          />
      }
    });
    return ScheduleDays;
  }

  // TODO refactor the return
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

      let {dayStart, dayEnd} = componentHelper.getRangeSchedules(courseType.schedules);
      let rangeDates = componentHelper.renderRangeDates(dayStart, dayEnd);

      return (
        <div>
          <div className="all-label">
            {courseType.name}:
          </div>
          <div className="tab">
            Du {rangeDates}
            {this._renderScheduleDays(scheduleDays)}
          </div>
        </div>
      );
    } else {
      return(<div></div>);
    }
  }
}