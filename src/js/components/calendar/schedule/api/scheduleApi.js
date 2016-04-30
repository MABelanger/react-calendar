"use strict";

import moment                     from "moment";
import * as componentHelper       from '../../../helper';        


export function getScheduleDays(courses){

  let formatedSchedules = [];
  courses.map( function(course){
    let svg = course.svg;
    let teachers = course.teachers;

    teachers.map( function(teacher){
      let courseDescription = teacher.course;
      let courseTypes = courseDescription.courseTypes;

      if(courseDescription.isVisible) {
        courseTypes.map( function(courseType){
          let schedules = courseType.schedules;

          schedules.map( function(schedule){
            let dayStart = schedule.dayStart;
            let dayEnd = schedule.dayEnd;

            //let weekDayName = moment.weekdays( moment(dayStart).day() );

            formatedSchedules.push({
              "_id": schedule._id,
              "link": componentHelper.getCourseTeacherLink(course, teacher),
              "logo": svg,
              "dayStart": dayStart,
              "dayEnd": dayEnd,
              "professorName": teacher.firstName + ' ' + teacher.lastName
            });
            
          }); // ./schedules.map
        });// ./courseTypes.map
      }// ./if(courseDescription.isVisible)
    });// ./teachers.map
  });// ./courses.map

  // a list of schedule to 2d array of the week day
  // [{}, {}, {}] -> [0][{},{}], [1][{},{}] ... [6][{},{}]
  let groupByDays = componentHelper.groupByDays(formatedSchedules);

  // order by hours the group by days 
  let scheduleDays = groupByDays.map( function(groupByDay){
    return componentHelper.sortByHours(groupByDay);
  });

  return scheduleDays;
}// ./getScheduleDays

export function getHeaders(scheduleDays){
  moment.locale('fr');
  let headers = scheduleDays.map( function(scheduleDay, index){
    if(scheduleDay.length > 0){
      let weekDayName = moment.weekdays( index + 1 );
      return weekDayName;
    }
  });
  return headers;
}// ./getHeaders

export function getNbSchedule(scheduleDays){
  let number = 0;
  scheduleDays.map( function(scheduleDay, index){
    number += scheduleDay.length;
  });
  return number;
}// ./getNbSchedule
