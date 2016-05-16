"use strict";

// Vendor modules
import React                          from "react";
import ReactDOM                       from "react-dom";
import { createHistory }              from 'history';
import { Router, Route, IndexRoute, Redirect,
  hashHistory, useRouterHistory, DefaultRoute }       from "react-router";

import * as Configs                    from "./configs/configs";

// Project modules
import Layout from './pages/Layout';
import CalendarPage from './pages/calendar/CalendarPage';
import CourseTeacherPage from './pages/calendar/CourseTeacherPage';
import ReservationCoursePage from './pages/calendar/ReservationCoursePage';
import ConferencesPage from './pages/conference/ConferencesPage';
import ConferenceDetailPage from './pages/conference/ConferenceDetailPage';
import ReservationConferencePage from './pages/conference/ReservationConferencePage';

const APP = document.getElementById('app');

const history = Configs.getHistory();

function onRouterUpdate(){
  window.scrollTo(0, 0)
}
ReactDOM.render(
  <Router 
    history={history}
    onUpdate={() => {onRouterUpdate();} }
  >
    <Redirect from="/" to="calendrier/cours/" />
    <Route  path="/"
            component={Layout}>

      <Route path = "calendrier/cours/"
              name="calendarPage"
              component={CalendarPage}>
      </Route>
      <Route  path="calendrier/cours/:courseNameSlug/:teacherSlug"
              name="courseTeacherPage"
              component={CourseTeacherPage}>
      </Route>
      <Route  path="reservation/cours/:courseNameSlug/:teacherSlug/:courseTypeSlug/:weekDayNameSlug/:hourStartSlug-:hourEndSlug"
              name="reservationPage"
              component={ReservationCoursePage}>
      </Route>
      <Route  path="conferences"
              name="conferencePage"
              component={ConferencesPage}>
      </Route>
      <Route  path="conferences/detail/:conferenceSlug/:speakerSlug"
              name="conferenceDetailPage"
              component={ConferenceDetailPage}>
      </Route>
      
      <Route  path="reservation/conference/:conferenceSlug/:speakerSlug/:dateSlug/:hourStartSlug"
              name="conferenceDetailPage"
              component={ReservationConferencePage}>
      </Route>
      <Redirect from="*" to="calendrier/cours/" />
    </Route>
  </Router>,APP);
// 
