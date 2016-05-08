"use strict";

// Vendor modules
import React                          from 'react';

// Flux
import CourseStore                    from '../../stores/courseStore';
import CourseConstants                from '../../constants/courseConstants';
import * as CourseActions             from '../../actions/courseActions';

// Project modules
import CalendarComponent              from '../../components/calendar/calendar';
import * as helperPage                from '../helperPage';

const CHANGE_EVENT = CourseConstants.CHANGE_EVENT;

export default class Calendar extends React.Component {

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
    return (
      <div className="container" style={{backgroundColor:"#F5F5F5"}}>
        <CalendarComponent 
          courses={this.state.courses}
        />
      </div>
    );
  }
}