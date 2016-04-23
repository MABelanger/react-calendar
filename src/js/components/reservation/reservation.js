"use strict";

import React from 'react';

import * as componentHelper       from '../helper'; 

export default class Reservation extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }
/*
      <div className="row">
        Reservation de {this.props.matchSchedule}
      </div>
*/

  _getReservationHeader(course, teacher, courseType, schedule){

    let courseName = null;
    let courseTypeName = null;
    let fullName = null;
    let {hourStart, hourEnd} = componentHelper.getHourRange(schedule);
    let weekDayName = null;

    if(course && teacher && courseType && schedule){
      courseName = course.name;
      courseTypeName = courseType.name;
      fullName = componentHelper.getFullName(teacher)
      weekDayName = componentHelper.getWeekDayName(schedule.dayStart);
    }

    return(
      <span>
        Demande de réservation pour cours <strong>{courseName}, {courseTypeName} </strong>
        avec {fullName} le {weekDayName} de {hourStart} à {hourEnd}.
      </span>
    );
  }
  render(){
    let {course, teacher, courseType, schedule} = this.props;
    let dateRange = componentHelper.getDateRange(schedule);
    console.log(dateRange)
    return (
      <div className="row">
        <div className="col-sm-6">
          <h3 className="text-center">Réservation</h3>
          <div className="reserv-cont-form">
            {this._getReservationHeader(course, teacher, courseType, schedule)}
          </div>
        </div>
      </div>
    );
  }

}
