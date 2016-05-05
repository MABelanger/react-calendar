"use strict";

// Vendor modules
import React                          from "react";
import ReactDOM                       from "react-dom";
import { Router, Route, IndexRoute,
  hashHistory, browserHistory }       from "react-router";

// Project modules
import Layout from './pages/Layout';
import CalendarPage from './pages/calendar/CalendarPage';
import CourseTeacherPage from './pages/calendar/CourseTeacherPage';
import ReservationCoursePage from './pages/calendar/ReservationCoursePage';
import ConferencesPage from './pages/conference/ConferencesPage';
import ConferenceDetailPage from './pages/conference/ConferenceDetailPage';

const APP = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route  path="/"
            component={Layout}>
      <IndexRoute
              name="calendarPage"
              component={CalendarPage}>
      </IndexRoute>
      <Route  path="/calendrier/cours/:courseNameSlug/:teacherSlug"
              name="courseTeacherPage"
              component={CourseTeacherPage}>
      </Route>
      <Route  path="/reservation/cours/:courseNameSlug/:teacherSlug/:courseTypeSlug/:weekDayNameSlug/:hourStartSlug-:hourEndSlug"
              name="reservationPage"
              component={ReservationCoursePage}>
      </Route>
      <Route  path="/conferences"
              name="conferencePage"
              component={ConferencesPage}>
      </Route>
      <Route  path="/reservation/conference/:conferenceSlug/:speakerSlug"
              name="conferenceDetailPage"
              component={ConferenceDetailPage}>
      </Route>
    </Route>
  </Router>,APP);
// 
