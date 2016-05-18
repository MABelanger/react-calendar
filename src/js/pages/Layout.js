"use strict";

// Vendor modules
import React                          from 'react';
import moment                         from 'moment';
import { Link }                       from "react-router";

// Flux CourseStore
import CourseStore                    from '../stores/courseStore';
import CourseConstants                from '../constants/courseConstants';
import * as CourseActions             from '../actions/courseActions';

// Flux ConferenceStore
import ConferenceStore                from '../stores/conferenceStore';
import * as ConferenceActions         from '../actions/conferenceActions';
import ConferenceConstants            from '../constants/conferenceConstants';

// Project modules
import Footer                         from "../components/layout/Footer";
import Nav                            from "../components/layout/Nav";

// Vendor styles
import 'bootstrap/dist/css/bootstrap.css';

// Project styles
import './styles.scss';


export default class Layout extends React.Component {

  constructor() {
    super();
    this.getCourses = this.getCourses.bind(this);
    this.getConferences = this.getConferences.bind(this);
    this.state = {
      courses: null,
      conferences: null,
    };
    // get the courses & conferencesfrom server.
    CourseActions.getCourses();
    ConferenceActions.getConferences();
  }

  componentWillMount() {
    CourseStore.addChangeListener(this.getCourses);
    ConferenceStore.addChangeListener(this.getConferences);
  }

  componentWillUnmount() {
    CourseStore.removeChangeListener(this.getCourses);
    ConferenceStore.removeChangeListener(this.getConferences);
  }

/* 
 * Courses
 */
  getCourses() {
    this.setState({
      courses: CourseStore.getCourses(),
    });
  }

/* 
 * Conferences
 */

  getConferences() {
    this.setState({
      conferences: ConferenceStore.getConferences()
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
          {React.cloneElement(
            this.props.children, {
              courses: this.state.courses,
              conferences: this.state.conferences,
            }
          )}
          <Footer/>
        </div>
      </div>
    );
  }
}
