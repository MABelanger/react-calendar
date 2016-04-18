"use strict";

import React from 'react';
import Course from './course/course';

import 'bootstrap/dist/css/bootstrap.css';
import './styles.scss';

export default class Courses extends React.Component {

  getRenderCourses(courses){
    var renderCourses = courses.map( function(course){
      return <Course name={course.name} logos={course.svg} teachers={course.teachers} />;
    });
    return renderCourses;
  }

  render(){
    return (
    	<div className="courses col-sm-3">
        {this.getRenderCourses(this.props.courses)}
	    </div>
   	);
  }
}

