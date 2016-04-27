"use strict";

import React                    from 'react';
import _                        from 'lodash'

import Reservation              from '../components/reservation/reservation';

// Flux Course
import CourseStore              from '../stores/courseStore';
import * as CourseActions       from '../actions/courseActions';
import CourseConstants          from '../constants/courseConstants';

// Flux Reservation
import ReservationStore              from '../stores/reservationStore';
import * as ReservationActions       from '../actions/reservationActions';
import ReservationConstants          from '../constants/reservationConstants';

import * as pageHelper          from './helper';


const CHANGE_EVENT = CourseConstants.CHANGE_EVENT;

export default class CourseTeacherPage extends React.Component {

  constructor() {
    super();
    this.getCourses = this.getCourses.bind(this);
    this.getConfirmation = this.getConfirmation.bind(this);
    this.state = {
      courses: {},
      confirmation: {}
    };
    // get the courses from server.
    CourseActions.getCourses();

    let reservation = {
      "from": "bibi@bibi.com",
      "message": "<h1>mon Message de rest</h1><ul><li>bibi</li></ul>"
    };
    // get the courses from server.
    ReservationActions.sendReservation(reservation);
  }

  componentWillMount() {
    ReservationStore.on(CHANGE_EVENT, this.getConfirmation);
    CourseStore.on(CHANGE_EVENT, this.getCourses);
  }

  componentWillUnmount() {
    CourseStore.removeListener(CHANGE_EVENT, this.getCourses);
    ReservationStore.removeListener(CHANGE_EVENT, this.getConfirmation);
  }

  getCourses() {
    this.setState({
      courses: CourseStore.getCourses()
    });
  }

  getConfirmation() {
    this.setState({
      confirmation: ReservationStore.getConfirmation()
    });
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
          confirmation={this.state.confirmation}
        />
      </div>
    );
    return <div>ReservationPage</div>
  }
}