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
      currentForm: null,
      freeDayDates: [],
    };

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.schedule){
      let schedule = nextProps.schedule;
      console.log('nextProps.schedule', nextProps.schedule)
      this.setState({
        list : [
          {title: "Un cour gratuit", form: 'FREE_DAY'},
          {title: "Lundi du 2 mai au 5 avril 2016 (11 cours)", form: 'TESTING'},
          {title: "Une ou plusieur journee de cours", form: 'TESTING'},
          {title: "Un cours d'essaie", form: 'TESTING'}
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
    console.log('item.title', item.title);
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
      currentForm: reservationType
    })
  }


  
  _removeItem(arr, item){
    var index = arr.indexOf(item);
    if (index >= 0) {
      arr.splice( index, 1 );
    }
  }

  changeValueFreeDays(name, value) {
    let freeDayDates = this.state.freeDayDates
    if(value == true){
      freeDayDates.push(name);
    }else {
      this._removeItem(freeDayDates, name);
    }
    this.setState({
      freeDayDates : freeDayDates
    });
  }


  _getFreeDaysForm(schedule, freeDayDates){
    return(
      <FreeDaysForm 
      dayStart={schedule.dayStart}
      dayEnd={schedule.dayEnd}
      freeDayDates={freeDayDates}
      msg="Un cour gratuit"
      changeValue = {(name, value) => { this.changeValueFreeDays(name, value); }}
      />
    );
  }
  render(){
    let {course, teacher, courseType, schedule} = this.props;
    let dateRange = componentHelper.getDateRange(schedule);

    let form = null;
    if(this.state.currentForm){
      if(this.state.currentForm.form == 'FREE_DAY'){
        form = this._getFreeDaysForm(schedule, this.state.freeDayDates)
      }
    }
    console.log('this.state.list', this.state.list)
    return (
      <div className="row">
        <div className="col-sm-6">
          <h3 className="text-center">Réservation</h3>
          <div className="reserv-cont-form">
            {this._getReservationHeader(course, teacher, courseType, schedule)}
            <Dropdown
              disabled={function(){}}
              list={this.state.list}
              label={'hello'}
              onSelect={this.select.bind(this)}
              cbGetName={this.getName.bind(this)}
              cbGetValue={this.getValue.bind(this)}
            />
          </div>
          {form}
        </div>
      </div>
    );
  }

}
