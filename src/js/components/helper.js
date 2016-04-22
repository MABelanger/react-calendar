"use strict";
import React from 'react';
import moment from 'moment';

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

export function renderHtml(html){
  return (
    <span dangerouslySetInnerHTML={{__html: html }} ></span>
  );
}

export function getWeekDayName(date){
  moment.locale('fr');
  return moment.weekdays( moment(date).day() );
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

export function groupByDays(schedules){
  let scheduleDays = _create2DArray(7);

  schedules.map((schedule) => {
    let day = moment(schedule.dayStart).day();

    scheduleDays[day].push(schedule);
  });

  // put sunday at then end of the week
  let sunday = scheduleDays.shift();
  scheduleDays.push(sunday);

  return scheduleDays;
}