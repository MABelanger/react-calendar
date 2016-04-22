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

  render(){
    if(this.props.courseTeacher){
      let course = this.props.courseTeacher.course;
      let teacher = this.props.courseTeacher.teacher;

      let courseTypes = teacher.course.courseTypes;

      let CourseTypes = courseTypes.map((courseType, index) => {
        return <CourseType key={index} courseType={courseType}/>;
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


