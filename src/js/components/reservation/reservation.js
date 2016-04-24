"use strict";

import React from 'react';

import * as componentHelper       from '../helper';
import Dropdown                   from '../common/dropdown/Dropdown';
import FreeDaysForm               from './forms/freeDays';

import './styles.scss';


export default class Reservation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '1',
    };
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

  getName(item){

    return item;
  }

  getValue(){
    if(false){
      return this.getName(this.props.schedule);
    } else {
      return "Choisir une option de réservation ...";
    }
  }

  select(reservationType){
    console.log('reservationType', reservationType)
  }

  render(){
    let {course, teacher, courseType, schedule} = this.props;
    let dateRange = componentHelper.getDateRange(schedule);

    let list = [
      "Un cour gratuit",
      "Lundi du 2 mai au 5 avril 2016 (11 cours)",
      "Une ou plusieur journee de cours",
      "Un cours d'essaie"
    ]
    console.log(dateRange)
    return (
      <div className="row">
        <div className="col-sm-6">
          <h3 className="text-center">Réservation</h3>
          <div className="reserv-cont-form">
            {this._getReservationHeader(course, teacher, courseType, schedule)}
            <Dropdown
              disabled={function(){}}
              list={list}
              label={'hello'}
              onSelect={this.select.bind(this)}
              value={this.state.value}
              cbGetName={this.getName.bind(this)}
              cbGetValue={this.getValue.bind(this)}
            />
          </div>
          a: <FreeDaysForm/>
        </div>
      </div>
    );
  }

}
