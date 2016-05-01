"use strict";

// Vendor modules
import React                          from 'react';
import ReactDOMServer                 from 'react-dom/server';

// Project modules
import * as componentHelper           from '../../helper';
import CourseType                     from './courseType/courseType';

export default class RightInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    let {course, teacher} = this.props;
    let CourseTypes = null;

    if(teacher){
      let courseTypes = teacher.course.courseTypes;
      CourseTypes = courseTypes.map((courseType, index) => {
        return <CourseType
          key={index}
          courseType={courseType}
          teacherSlug={teacher.slug}
          courseNameSlug={course.slug}
          />;
      });
    }

    return (
      <div className="col-sm-4 info-pad-top-col-3">
        { CourseTypes }
      </div>
    );
  }
}