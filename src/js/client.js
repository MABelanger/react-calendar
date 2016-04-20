// import React from 'react';
// import ReactDOM from 'react-dom';


// ReactDOM.render(<CalendarPage />, document.getElementById('app'));

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from './pages/Layout';
import CalendarPage from './pages/Calendar';
import CourseTeacherPage from './pages/CourseTeacher';


const app = document.getElementById('app');
// /calendrier/cours/yoga/danielle-fontaine
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={CalendarPage}></IndexRoute>
      <Route path="calendrier/cours(/:courseNameSlug)(/:teacherSlug)" name="courses" component={CourseTeacherPage}></Route>
      <Route path="settings" name="settings" component={CalendarPage}></Route>
    </Route>
  </Router>,
app);