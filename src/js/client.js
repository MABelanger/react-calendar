// import React from 'react';
// import ReactDOM from 'react-dom';


// ReactDOM.render(<CalendarPage />, document.getElementById('app'));

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";

import Layout from './pages/Layout';
import CalendarPage from './pages/Calendar';
import CourseTeacherPage from './pages/CourseTeacher';
import ReservationPage from './pages/Reservation';


const app = document.getElementById('app');
// /calendrier/cours/yoga/danielle-fontaine
// /reservation/cours/yoga/sandra-duval/yoga-doux/mardi/20.00-21.15
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute name="calendarPage" component={CalendarPage}></IndexRoute>
      <Route path="/calendrier/cours/:courseNameSlug/:teacherSlug" name="courseTeacherPage" component={CourseTeacherPage}></Route>
      <Route path="/reservation/cours/:courseNameSlug/:teacherSlug/:courseTypeSlug/:weekDayNameSlug/:hourStartSlug-:hourEndSlug" name="reservationPage" component={ReservationPage}></Route>
      <Route path="settings" name="nameSettings" component={CalendarPage}></Route>
    </Route>
  </Router>,
app);