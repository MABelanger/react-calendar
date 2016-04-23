"use strict";

import React                    from 'react';
import _                        from 'lodash'

import CourseTeacher            from '../components/courseTeacher/courseTeacher';
import CourseStore              from '../stores/courseStore';
import * as CourseActions       from '../actions/courseActions';
import CourseConstants          from '../constants/courseConstants';

import * as pageHelper          from './helper';


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


  render(){

    // reservation/cours/:courseNameSlug/:teacherSlug/:courseTypeSlug/:weekDayNameSlug/:hourStartSlug-:hourEndSlug
    const { query } = this.props.location;
    const { params } = this.props;
    const { courseNameSlug, teacherSlug, courseTypeSlug, weekDayNameSlug, hourStartSlug, hourEndSlug } = params;

    let { course, teacher} = pageHelper.getCourseTeacher(this.state.courses, courseNameSlug, teacherSlug);
    let matchSchedule = pageHelper.getMatchSchedule(this.state.courses, courseNameSlug, teacherSlug, courseTypeSlug, weekDayNameSlug, hourStartSlug, hourEndSlug );

    console.log('matchSchedule', matchSchedule)


    return (
      <div className="container" style={{backgroundColor:"#F5F5F5"}}>
        <CourseTeacher course={course} teacher={teacher} />
      </div>
    );
    return <div>ReservationPage</div>
  }
}