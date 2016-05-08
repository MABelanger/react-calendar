"use strict";

// Vendor modules
import Request                        from "superagent";

// Project modules
import ClientDispatcher               from "../dispatcher/clientDispatcher";
import CourseConstants                from "../constants/courseConstants";


export function getCourses() {
  const URL = 'http://localhost:3000/public/api/courses';

  Request
  .get(URL, function(err, res){
    ClientDispatcher.dispatch({
      actionType: CourseConstants.RECEIVE_COURSES,
      courses: res.body
    });
  });
}