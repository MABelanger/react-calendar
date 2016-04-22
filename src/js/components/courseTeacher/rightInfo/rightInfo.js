"use strict";

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as componentHelper from '../../helper';

import CourseType from './courseType/courseType';



export default class RightInfo extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  _eachFreeDay(freeDays){
    <span class="txt-red">
      (Gratuit le 05 mai 2016 )<br />
    </span>
  }

  _renderRangeHours(){
    return(
      <span>
        18:00 à 19:20
      </span>
    );
  }

  _eachHours(data){
    return(
      <li class="coursed-li-hour">
        {this._renderRangeHours()}
        
        <a class="link-url" href="#/day_schedules/reserve/46">
          Réserver
        </a>

        <strong>
          <u>Complet</u>
        </strong>

        <br />
        {this._eachFreeDay(freeDays)}
      </li>
    );
  }

  _eachDay(data){
    return(
      <ul>
        <li class="coursed-li-day-name">
          <span class="all-label">Lundi</span>
        </li>
        <ul>
          {this._eachHours()}
        </ul>
      </ul>
    );
  }

  _eachCourseType(courseType){
    return(
      <CourseType courseType={courseType}/>
    );
  }

  render(){
    if(this.props.courseTeacher){
      let course = this.props.courseTeacher.course;
      let teacher = this.props.courseTeacher.teacher;

      let courseTypes = teacher.course.courseTypes;

      let CourseTypes = courseTypes.map((courseType) => {
        return this._eachCourseType(courseType);
      });

      return (
        <div class="col-sm-4 info-pad-top-col-3">
          { CourseTypes }
        </div>
      );
    } else {
      return(<div></div>);
    }
  }
}


