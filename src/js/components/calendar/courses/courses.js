"use strict";

// Vendor modules
import React from 'react';
import Course from './course/course';

// Vendor styles
import 'bootstrap/dist/css/bootstrap.css';

// Project styles
import './styles.scss';

export default class Courses extends React.Component {

  getRenderCourses(courses){
    var renderCourses = courses.map( function(course, index){
      return <Course key={index} course={course} />;
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