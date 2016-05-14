"use strict";

// Vendor modules
import Request                        from "superagent";

// Project modules
import ClientDispatcher               from "../dispatcher/clientDispatcher";
import CourseConstants                from "../constants/courseConstants";


export function getCourses() {
  const URL_API = CourseConstants.URL_API;

  Request
  .get(URL_API, function(err, res){
    ClientDispatcher.dispatch({
      actionType: CourseConstants.RECEIVE_COURSES,
      courses: res.body
    });
  });
}