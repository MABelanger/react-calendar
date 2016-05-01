"use strict";

// Vendor modules
import moment                         from 'moment';
import React                          from 'react';
import ReactDOMServer                 from 'react-dom/server';

// Project modules
import * as componentHelper            from '../../helper';

export default class Reserve extends React.Component {

  constructor(props) {
    super(props);
  }

  _renderCourseType(courseTypes){
    let CourseTypes = courseTypes.map((courseType, index) => {
      let name = courseType.name;
      let description = courseType.description;

      return (
        <li key={index} className="coursed-li-schedule">
          <span className="all-label">{name}</span>:
          <span dangerouslySetInnerHTML={{__html: description }}></span>
        </li>
      );
    });
    return CourseTypes;
  }

  render(){
    let CourseTypes = null;
    let {course, teacher} = this.props;

    if(course && teacher){
      CourseTypes = this._renderCourseType(this.props.teacher.course.courseTypes);
    }
    return(
      <div className="row">
        <div className="col-sm-12">
          <ul className="">
            {CourseTypes}
          </ul>
        </div>
      </div>
    );
  }
}