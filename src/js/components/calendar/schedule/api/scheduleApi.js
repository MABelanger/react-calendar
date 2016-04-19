"use strict";

import moment                     from "moment";

var _clone = function(item) {
  //return cloned copy so that the item is passed by value instead of by reference
  return JSON.parse(JSON.stringify(item)); 
};

function _create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}


function _getHourMinute(isoDate){
  let hour = moment( isoDate ).utcOffset("+00:00").hour();
  let minute = moment( isoDate ).utcOffset("+00:00").minute();

  return {
    hour: hour,
    minute: minute
  };
}

function _sortByHours(scheduleDay){
  scheduleDay.sort(function(a, b) {

    a = _getHourMinute(a.dayStart)
    b = _getHourMinute(b.dayStart)

    // compare hours first
    if (a.hour < b.hour) return -1;
    if (a.hour > b.hour) return 1;

    // else a.hour === b.hour, so compare minutes to break the tie
    if (a.minute < b.minute) return -1;
    if (a.minute > b.minute) return 1;

    // couldn't break the tie
    return 0;
  });
  return scheduleDay;
}

function _groupByDays(formatedSchedules){
  let scheduleDays = _create2DArray(7);

  formatedSchedules.map( function(formatedSchedule){
    let day = moment(formatedSchedule.dayStart).day();

    scheduleDays[day].push(formatedSchedule);
  });

  // put sunday at then end of the week
  let sunday = scheduleDays.shift();
  scheduleDays.push(sunday);

  return scheduleDays;
}

export function getScheduleDays(courses){
  moment.locale('fr');

  let formatedSchedules = [];
  courses.map( function(course){
    let svg = course.svg;
    let teachers = course.teachers;

    teachers.map( function(teacher){
      let courseDescription = teacher.course;
      let courseTypes = courseDescription.courseTypes;

      courseTypes.map( function(courseType){
        let schedules = courseType.schedules;

        schedules.map( function(schedule){
          let dayStart = schedule.dayStart;
          let dayEnd = schedule.dayEnd;

          let weekDayName = moment.weekdays( moment(dayStart).day() );

          formatedSchedules.push({
            'weekDayName': weekDayName,
            "_id": schedule._id,
            "link": "link1",
            "logo": svg,
            "dayStart": dayStart,
            "dayEnd": dayEnd,
            "professorName": teacher.firstName + ' ' + teacher.lastName
          });
          
        }); // ./schedules.map
      });// ./courseTypes.map
    });// ./teachers.map
  });// ./courses.map

  // a list of schedule to 2d array of the week day
  // [{}, {}, {}] -> [0][{},{}], [1][{},{}] ... [6][{},{}]
  let groupByDays = _groupByDays(formatedSchedules);

  // order by hours the group by days 
  let scheduleDays = groupByDays.map( function(groupByDay){
    return _sortByHours(groupByDay);
  });

  return scheduleDays;
}// ./getScheduleDays

export function getHeaders(scheduleDays){
  let headers = scheduleDays.map( function(scheduleDay, index){
    if(scheduleDay.length > 0){
      let weekDayName = moment.weekdays( index + 1 );
      return weekDayName;
    }
  });
  return headers;
}// ./getHeaders
