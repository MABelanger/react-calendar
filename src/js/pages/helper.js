"use strict";

// Vendor modules
import React                          from 'react';
import moment                         from 'moment';

// Project modules
import * as componentHelper from '../components/helper';

export function getCourseTeacher(courses, courseNameSlug, teacherSlug){
  let course = null;
  let teacher = null;

  if(courses.length > 0){
    course = _.find(courses, function(item) {
        return item.slug == courseNameSlug; 
    });

    teacher = _.find(course.teachers, function(item) {
        return item.slug == teacherSlug; 
    });
  }
  return {
    course: course,
    teacher: teacher
  };
}

function _isMatchHours(schedule, hourStartSlug, hourEndSlug){
  let hourStart = moment(schedule.dayStart).utcOffset("+00:00").format("HH.mm");
  let hourEnd = moment(schedule.dayEnd).utcOffset("+00:00").format("HH.mm");

  return ( (hourStart == hourStartSlug) && (hourEnd == hourEndSlug) ); // hourStartSlug, hourEndSlug
}

function _isMatchWeekDayName(schedule, weekDayNameSlug){
  let weekDayName = componentHelper.getWeekDayName(schedule.dayStart);
  return (weekDayName == weekDayNameSlug);
}

function _isMatchSchedule(schedule, weekDayNameSlug, hourStartSlug, hourEndSlug){
  return    _isMatchWeekDayName(schedule, weekDayNameSlug) 
         && _isMatchHours(schedule, hourStartSlug, hourEndSlug)
}

function _getMatchSchedule(schedules, weekDayNameSlug, hourStartSlug, hourEndSlug){
  let matchSchedule = null;

  for (let i=0; i < schedules.length; i++) {
    let schedule = schedules[i];
    if( _isMatchSchedule(schedule, weekDayNameSlug, hourStartSlug, hourEndSlug) ){
      matchSchedule = schedule;
      break;
    }
  }
  return matchSchedule;
}

export function getMatchCourseTypeSchedule( courses, courseNameSlug, teacherSlug, 
                              courseTypeSlug, weekDayNameSlug,
                              hourStartSlug, hourEndSlug ){

  let {course, teacher} = getCourseTeacher(courses, courseNameSlug, teacherSlug);
  let matchSchedule = null;
  let courseType = null;

  if (course && teacher) {
    let courseTypes = teacher.course.courseTypes;

    courseType = _.find(courseTypes, function(item) {
      return item.slug == courseTypeSlug; 
    });

    if(courseType){
      let schedules = courseType.schedules;
      matchSchedule = _getMatchSchedule(schedules, weekDayNameSlug, hourStartSlug, hourEndSlug);
    }
  }
  return {
    matchSchedule: matchSchedule,
    courseType: courseType
  };
}