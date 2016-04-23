"use strict";

import React                    from 'react';
import _                        from 'lodash'

import CourseTeacher            from '../components/courseTeacher/courseTeacher';
import CourseStore              from '../stores/courseStore';
import * as CourseActions       from '../actions/courseActions';
import CourseConstants          from '../constants/courseConstants';


const CHANGE_EVENT = CourseConstants.CHANGE_EVENT;

export default class CourseTeacherPage extends React.Component {

  constructor() {
    super();
    this.getCourses = this.getCourses.bind(this);
    this.state = {
      courses: {},
    };
    // get the courses from server.
    CourseActions.getCourses();
  }

  componentWillMount() {
    CourseStore.on(CHANGE_EVENT, this.getCourses);
  }

  componentWillUnmount() {
    CourseStore.removeListener(CHANGE_EVENT, this.getCourses);
  }

  getCourses() {
    this.setState({
      courses: CourseStore.getCourses(),
    });
  }


  getCourseTeacher(courses, courseNameSlug, teacherSlug){

    let course = null;
    let teacher = null;

    if(courses.length > 0){
      course = _.find(courses, function(item) {
          return item.slug == courseNameSlug; 
      });

      teacher = _.find(course.teachers, function(item) {
          return item.slug == teacherSlug; 
      });
    }

    return {
      course: course,
      teacher: teacher
    };
  }


  render(){

    const { query } = this.props.location;
    const { params } = this.props;
    const { courseNameSlug, teacherSlug } = params;
    const { date, filter } = query;

    let { course, teacher} = this.getCourseTeacher(this.state.courses, courseNameSlug, teacherSlug);

    return (
      <div className="container" style={{backgroundColor:"#F5F5F5"}}>
        <CourseTeacher course={course} teacher={teacher} />
      </div>
    );
  }
}