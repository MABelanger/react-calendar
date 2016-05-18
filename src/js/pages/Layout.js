"use strict";

// Vendor modules
import React                          from 'react';
import moment                         from 'moment';
import { Link }                       from "react-router";

// Flux
import CourseStore                    from '../stores/courseStore';
import CourseConstants                from '../constants/courseConstants';
import * as CourseActions             from '../actions/courseActions';

// Project modules
import Footer                         from "../components/layout/Footer";
import Nav                            from "../components/layout/Nav";

// Vendor styles
import 'bootstrap/dist/css/bootstrap.css';

// Project styles
import './styles.scss';

const CHANGE_EVENT = CourseConstants.CHANGE_EVENT;

export default class Layout extends React.Component {

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

/* 
 * courses
 */
  getCourses() {
    this.setState({
      courses: CourseStore.getCourses(),
    });
  }



  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px",
    };
    return (
      <div>
        <Nav location={location} />
        <div className="container" style={containerStyle}>
          {React.cloneElement(this.props.children, { courses: this.state.courses })}
          <Footer/>
        </div>
      </div>
    );
  }
}
