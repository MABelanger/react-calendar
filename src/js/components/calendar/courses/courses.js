"use strict";

// Vendor modules
import React from 'react';
import Course from './course/course';

// Project styles
import './styles.scss';

export default class Courses extends React.Component {

  getRenderCourses(courses){
    if(courses && courses.length > 0){
      let renderCourses = courses.map( (course, index) => {
        // TODO:. this is a quick fix... go into the db...
        if(course.name != 'Joy-a' && course.name != 'Coaching'){
          return <Course key={index} course={course} />;
        }
      });
      return renderCourses;
    }
  }

  render(){
    return (
      <div className="courses col-sm-3">
        {this.getRenderCourses(this.props.courses)}
      </div>
     );
  }
}
