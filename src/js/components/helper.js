"use strict";
import React from 'react';
import moment from 'moment';

export function create2DArray(rows) {
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

export function renderHtml(html){
  return (
    <span dangerouslySetInnerHTML={{__html: html }} ></span>
  );
}

export function getWeekDayName(isoDate){
  moment.locale('fr');
  let weekDayName = null;
  if(isoDate){
    weekDayName = moment.weekdays( moment(isoDate).utcOffset("+00:00").day() );
  }
  return weekDayName;
}

export function getDayFormat(isoDate){
  moment.locale('fr');
  return moment( isoDate ).utcOffset("+00:00").format('LL');
}

export function isNotExpired(momentDate){
  let now = moment();
  let isBefore = moment(now).isBefore(momentDate)
  return isBefore;
}


export function sortByHours(scheduleDay){
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

export function getFullName(teacher){
  if(teacher){
    return teacher.firstName + ' ' + teacher.lastName;
  }
}

// calendrier/cours/yoga/marianne-girard
export function getLink(course, teacher){
  if(course && teacher){
    return '#/calendrier/cours/' + course.slug + '/' + teacher.slug;
  }
}


export function getDateRange(schedule){
  moment.locale('fr');
  if(schedule){
    let dayStart = moment( schedule.dayStart ).utcOffset("+00:00").format('LL');
    let dayEnd = moment( schedule.dayEnd ).utcOffset("+00:00").format('LL');
    return 'du ' + dayStart + ' au ' + dayEnd;
  }
  return null;
}


export function getWeekDates(startDate, stopDate) {
    var dateArray = [];
    stopDate = moment( stopDate ).utcOffset("+00:00")
    var currentDate = moment( startDate ).utcOffset("+00:00");
    while (currentDate <= stopDate) {
        dateArray.push( moment(currentDate) ) // .format('YYYY-MM-DD')
        currentDate = moment(currentDate).add(7, 'days');
    }
    return dateArray;
}

export function removeEmptyArray(array){
  return array.filter(function(el){ return (el.length > 0)  })
}

export function getHourRange(schedule){
  moment.locale('fr');
  let hourStart = null;
  let hourEnd = null;
  if(schedule){
    hourStart = moment( schedule.dayStart ).utcOffset("+00:00").format("HH:mm");
    hourEnd = moment( schedule.dayEnd ).utcOffset("+00:00").format("HH:mm");
  }
  return {
    hourStart: hourStart,
    hourEnd: hourEnd
  }
}

export function getNow(){
  let tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
  return moment(new Date(Date.now() - tzoffset)).utcOffset(0);//.toISOString();
}

function getNextDayStart(dayStart){
  let dayNumber = parseInt(dayStart.day());
  let nextDayStart = getNow();

  let hour = dayStart.hour();
  let minute = dayStart.minute();

  nextDayStart = nextDayStart.day(dayNumber)
  // let nextDayStartNumber = -1;
  // while (nextDayStartNumber != dayNumber) {
  //     nextDayStart = nextDayStart.add(1, 'day');
  //     nextDayStartNumber = parseInt(nextDayStart.day())
  // }

  // reset the HH:mm of the dayStart
  nextDayStart.set({
    hour:hour,
    minute:minute,
    second:0,
    millisecond:0
  });
  return nextDayStart;
}


export function getDayStartFromNow(dayStart){
  moment.locale('fr');
  //let dayStart = moment('2016-04-25T23:49:19.838Z').utcOffset("+00:00");
  let now = getNow();


  while(now.isAfter(dayStart)){
    dayStart = getNextDayStart(dayStart);
  }

  return dayStart;
}



export function groupByDays(schedules){
  let scheduleDays = create2DArray(7);

  schedules.map((schedule) => {
    let day = moment(schedule.dayStart).day();

    scheduleDays[day].push(schedule);
  });

  // put sunday at then end of the week
  let sunday = scheduleDays.shift();
  scheduleDays.push(sunday);

  return scheduleDays;
}