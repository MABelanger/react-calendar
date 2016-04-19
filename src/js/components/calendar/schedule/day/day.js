"use strict";

import React from 'react';
import moment from 'moment';

import Course from './course/course';


export default class Day extends React.Component {

  _getHours(isoDate){
    return moment( isoDate ).utcOffset("+00:00").format("HH:mm");
  }

  eachCourse(course, i) {
    return (
      <Course 
        link={course.link}
        logo={course.logo}
        hourStart={this._getHours(course.dayStart)}
        hourEnd={this._getHours(course.dayEnd)}
        professorName={course.professorName}
      />
    );
  }

  render(){
    return (
      <td nameClass="cal">
        {this.props.courses.map(this.eachCourse.bind(this))}
      </td>
    );
  }
}
