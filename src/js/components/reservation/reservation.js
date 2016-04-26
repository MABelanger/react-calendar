"use strict";

import React from 'react';

import moment from 'moment';

import * as componentHelper       from '../helper';
import Dropdown                   from '../common/dropdown/Dropdown';
import TryingDaysForm               from './forms/tryingDays';
import AllCourseDaysForm               from './forms/allCourseDays';

import './styles.scss';


export default class Reservation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentForm: null,
      tryingDaysDates: [],
      allCourseDaysDates: []
    };
    console.log(
      componentHelper.getDayStartFromNow(moment('2016-04-19T23:49:19.838Z').utcOffset("+00:00")).toISOString()
    );
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.schedule){
      let schedule = nextProps.schedule;

      this.setState({
        list : [
          {title: "Un cour gratuit", form: 'FREE_DAYS'},
          {title: "Lundi du 2 mai au 5 avril 2016 (11 cours)", form: 'ALL_COURSE_DAYS'},
          {title: "Une ou plusieur journee de cours", form: 'TESTING'},
          {title: "Un cours d'essaie", form: 'TRYING_DAYS'}
        ]
      });
    }
  }

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
    return item.title;
  }

  getValue(){
    if(this.state.currentForm){
      return this.getName(this.state.currentForm);
    } else {
      return "Choisir une option de réservation ...";
    }
  }

  select(reservationType){
    this.setState({
      currentForm: reservationType,
      tryingDaysDates: [],
      allCourseDaysDates: []
    })
  }


  
  _removeItem(arr, item){
    var index = arr.indexOf(item);
    if (index >= 0) {
      arr.splice( index, 1 );
    }
    return arr;
  }

  changeValueTryingDays(name, value) {
    let tryingDaysDates = this.state.tryingDaysDates
    name = moment(name).format('LL');

    if(value == true){
      tryingDaysDates.push(name);
    }else {
      tryingDaysDates = this._removeItem(tryingDaysDates, name);
    }

    this.setState({
      tryingDaysDates : tryingDaysDates
    });
  }

  changeValueAllCourseDays(name, value) {
    let allCourseDaysDates = this.state.allCourseDaysDates
    name = moment(name).format('LL');

    if(value == true){
      allCourseDaysDates.push(name);
    }else {
      allCourseDaysDates = this._removeItem(allCourseDaysDates, name);
    }

    this.setState({
      allCourseDaysDates : allCourseDaysDates
    });
  }


  _getTryingDaysForm(schedule, selectedDates){
    return(
      <TryingDaysForm 
      dayStart={schedule.dayStart}
      dayEnd={schedule.dayEnd}
      selectedDates={selectedDates}
      msg="Un cour gratuit"
      changeValue = {(name, value) => { this.changeValueTryingDays(name, value); }}
      />
    );
  }

  _getAllCourseDaysForm(schedule, selectedDates){
    return(
      <AllCourseDaysForm 
      dayStart={schedule.dayStart}
      dayEnd={schedule.dayEnd}
      selectedDates={selectedDates}
      msg=" Une ou plusieurs journée(s) de cours"
      changeValue = {(name, value) => { this.changeValueAllCourseDays(name, value); }}
      />
    );
  }

  render(){
    let {course, teacher, courseType, schedule} = this.props;
    let dateRange = componentHelper.getDateRange(schedule);

    let currentForm = null;
    if(this.state.currentForm){
      if(this.state.currentForm.form == 'TRYING_DAYS'){
        currentForm = this._getTryingDaysForm(schedule, this.state.tryingDaysDates)
      }else if(this.state.currentForm.form == 'ALL_COURSE_DAYS'){
        currentForm = this._getAllCourseDaysForm(schedule, this.state.allCourseDaysDates)
      }
    }

    return (
      <div className="row">
        <div className="col-sm-6">
          <h3 className="text-center">Réservation</h3>
          <div className="reserv-cont-form">
            {this._getReservationHeader(course, teacher, courseType, schedule)}
            <Dropdown
              disabled={function(){}}
              list={this.state.list}
              onSelect={this.select.bind(this)}
              cbGetName={this.getName.bind(this)}
              cbGetValue={this.getValue.bind(this)}
            />
          </div>
          {currentForm}
        </div>
      </div>
    );
  }

}
