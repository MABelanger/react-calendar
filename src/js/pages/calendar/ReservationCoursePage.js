"use strict";

// Vendor modules
import React                          from 'react';
import _                              from 'lodash'

// Flux CourseStore
import CourseStore                    from '../../stores/courseStore';
import * as CourseActions             from '../../actions/courseActions';
import CourseConstants                from '../../constants/courseConstants';

// Project modules
import ReservationCourse                    from '../../components/reservation/reservationCourse';
import * as helperPage                from '../helperPage';

const CHANGE_EVENT = CourseConstants.CHANGE_EVENT;

export default class CourseTeacherPage extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object
  }

  constructor(props, context) {
    super(props, context);
    //this.getCourses = this.getCourses.bind(this);
    this.state = {
      //courses: {},
      confirmation: {}
    };
    // get the courses from server.
    //CourseActions.getCourses();
  }

  componentWillReceiveProps(nextProps) {

    if(nextProps.courses && nextProps.courses.length > 0){
      const { query } = this.props.location;
      const { params } = this.props;
      const { courseNameSlug, teacherSlug, courseTypeSlug, weekDayNameSlug, hourStartSlug, hourEndSlug } = params;

      let { course, teacher} = helperPage.getCourseTeacher(nextProps.courses, courseNameSlug, teacherSlug);
      let {courseType, matchSchedule} = helperPage.getMatchCourseTypeSchedule(nextProps.courses, courseNameSlug, teacherSlug, courseTypeSlug, weekDayNameSlug, hourStartSlug, hourEndSlug );

      matchSchedule = helperPage.getReservationScheduleFromNow(matchSchedule)

      this.setState({
        course: course,
        teacher: teacher,
        courseType: courseType,
        matchSchedule: matchSchedule,
        key: Date()
      });
    }
  }

  // componentWillMount() {
  //   CourseStore.on(CHANGE_EVENT, this.getCourses);
  // }

  // componentWillUnmount() {
  //   CourseStore.removeListener(CHANGE_EVENT, this.getCourses);
  // }

  // getCourses() {
  //   this.setState({
  //     courses: CourseStore.getCourses()
  //   });
  // }

  // TODO put it into helper or extend from parent
  backBtnClick(e){
    e.preventDefault();
    const { router } = this.context
    router.push('/')
  }

  render(){    
    return (
      <ReservationCourse
        course={this.state.course}
        teacher={this.state.teacher}
        courseType={this.state.courseType}
        schedule={this.state.matchSchedule}
        backBtnClick={(e)=>{ this.backBtnClick(e); }}
      />
    );
  }
}