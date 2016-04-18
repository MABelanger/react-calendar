"use strict";

import React from 'react';
import Course from './course/course';


export default class Day extends React.component {

  constructor(props) {
    super(props);
    this.state = {
      courses: []
    };
    // bind the functions to this because is not Autobinding with class es6
  }

  eachCourse(course, i) {
    return (
      <Course 
        link={course.link}
        logoName={course.logoName}
        logos={this.props.logos}
        startHour={course.startHour}
        endHour={course.endHour}
        professorName={course.professorName}
      />
    );
  }

  render(){
    return (
      <td nameClass="cal">
        {this.props.courses.map(this.eachCourse)}
      </td>
    );
  }
}
