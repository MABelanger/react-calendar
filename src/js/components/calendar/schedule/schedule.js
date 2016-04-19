"use strict";

import React from 'react';

import * as scheduleApi from './api/scheduleApi';
import Day from './day/day';

import './styles.scss';

export default class Schedule extends React.Component {

  constructor(props) {
    super(props);
    this.maxHeight=0;
    this.nbLoop=0;

    this.state = {
      scheduleDays: []
    }
  }


  componentWillReceiveProps(nextProps) {
    if(nextProps.courses != this.props.courses){
      console.log('toto', scheduleApi.getScheduleDays(nextProps.courses))
      this.setState({
        scheduleDays: scheduleApi.getScheduleDays(nextProps.courses),
        key: Date()
      });
    }
  }

  eachDay(day, i) {
    var courses = day;
    return (
      <Day
        courseHeight={this.maxHeight}
        setMaxHeight={this.setMaxHeight.bind(this)}
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

  setMaxHeight(height){
    this.nbLoop++;
    if(this.maxHeight < height){
      this.maxHeight = height + 10;
    }
    console.log('this.maxHeight', this.maxHeight)
    if(this.nbLoop == scheduleApi.getNbSchedule(this.state.scheduleDays) ){
      //this.nbLoop = 0; // reset the loop

      this.setState({
        key: Date()
      });
    }
  }

  render(){
    return (
      <div className="schedule col-sm-9" key={this.state.key}>
        <table className="cal">
          <thead>
            <tr className="cal">
              {scheduleApi.getHeaders(this.state.scheduleDays).map(this.eachHeader)}
            </tr>
          </thead>
          <tbody>
            <tr className="cal">
              {this.state.scheduleDays.map(this.eachDay.bind(this))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
