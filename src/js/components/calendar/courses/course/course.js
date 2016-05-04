"use strict";

// Vendor modules
import React                          from 'react';
import {Link}                         from 'react-router';
import classNames                     from  'classnames'; 

// Project modules
import * as componentHelper           from '../../../helper';

export default class Course extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showTeachers: false
    };
    // bind the functions to this because is not Autobinding with class es6
  }

  showHideTeachers() {
    this.setState({showTeachers: !this.state.showTeachers});
  }

  _renderTeacher(index, classes, fullName, link){
    return (
      <div key={index} className={classes}>
        <Link to={link}>
          <div className="teacher-name">
            {fullName}
          </div>
        </Link>
      </div>
    );
  }

  getRenderTeachers(course, classes){
    let teachers = course.teachers;
    var renderTeachers = teachers.map( (teacher, index)=>{
      if(teacher.course.isVisible){
        let fullName = componentHelper.getFullName(teacher);
        let link = componentHelper.getCourseTeacherLink(course, teacher);
        return this._renderTeacher(index, classes, fullName, link);
      }
    });
    return renderTeachers;
  }

  _renderCourse() {
    let course = this.props.course;
    let name = course.name;
    let svg = course.svg;

    var classes = classNames( this.props.className, {
      'teacher' : true,
      'teacher-transition' : true,
        'teacher-show': ( this.state.showTeachers == true ),
        'teacher-hide': ( this.state.showTeachers == false )
    });
    return (
      <div className="course">
        <div className="course-header" onClick={this.showHideTeachers.bind(this)}>
          <div className="course-header-name">
            {name}
          </div>
          <div className="course-header-icon">
            <span dangerouslySetInnerHTML={{__html: svg }}></span>
          </div>
        </div>

        <div className="teachers">
          {this.getRenderTeachers(course, classes)}
        </div>
      </div>
    );
  }

  render(){
    return this._renderCourse();
  }
}