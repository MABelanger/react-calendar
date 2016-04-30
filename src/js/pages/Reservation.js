"use strict";

import React                    from 'react';
import _                        from 'lodash'


import Reservation              from '../components/reservation/reservation';

// Flux Course
import CourseStore              from '../stores/courseStore';
import * as CourseActions       from '../actions/courseActions';
import CourseConstants          from '../constants/courseConstants';

import * as pageHelper          from './helper';


const CHANGE_EVENT = CourseConstants.CHANGE_EVENT;

export default class CourseTeacherPage extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object
  }

  constructor(props, context) {
    super(props, context);
    this.getCourses = this.getCourses.bind(this);
    this.state = {
      courses: {},
      confirmation: {}
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
      courses: CourseStore.getCourses()
    });
  }

  // TODO put it into helper or extend from parent
  backBtnClick(e){
    e.preventDefault();
    const { router } = this.context
    router.push('/')
  }

  render(){

    // reservation/cours/:courseNameSlug/:teacherSlug/:courseTypeSlug/:weekDayNameSlug/:hourStartSlug-:hourEndSlug
    const { query } = this.props.location;
    const { params } = this.props;
    const { courseNameSlug, teacherSlug, courseTypeSlug, weekDayNameSlug, hourStartSlug, hourEndSlug } = params;

    let { course, teacher} = pageHelper.getCourseTeacher(this.state.courses, courseNameSlug, teacherSlug);
    let {courseType, matchSchedule} = pageHelper.getMatchCourseTypeSchedule(this.state.courses, courseNameSlug, teacherSlug, courseTypeSlug, weekDayNameSlug, hourStartSlug, hourEndSlug );

    return (
      <div className="container" style={{backgroundColor:"#F5F5F5"}}>
        <Reservation
          course={course}
          teacher={teacher}
          courseType={courseType}
          schedule={matchSchedule}
          backBtnClick={(e)=>{ this.backBtnClick(e); }}
        />
      </div>
    );
    return <div>ReservationPage</div>
  }
}

