import Request                    from "superagent";

import ClientDispatcher from "../dispatcher/clientDispatcher";
import CourseConstants from "../constants/courseConstants";

export function getCourses() {
  const URL = 'http://localhost:3000/api/courses';

  console.log('CourseConstants.RECEIVE_COURSES', CourseConstants.RECEIVE_COURSES)
  Request
  .get(URL, function(err, res){
    ClientDispatcher.dispatch({
      actionType: CourseConstants.RECEIVE_COURSES,
      courses: res.body
    });
  });
}