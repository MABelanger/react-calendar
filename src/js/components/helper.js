"use strict";

// Vendor modules
import React                          from 'react';
import moment                         from 'moment';

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
    <span>
      <span dangerouslySetInnerHTML={{__html: html }}></span>
    </span>
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
  let now = getNow();
  let isNotExpired = moment(now).isBefore(momentDate) || moment(now).isSame(momentDate)
  return isNotExpired;
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


function _compareSchedules(a, b) {
  
    let dayStartA = a.dayStart;
    let dayStartB = b.dayStart;
    if ( dayStartA.isBefore(dayStartB) )
      return -1;
    else if ( dayStartA.isAfter(dayStartB) )
      return 1;
    else 
      return 0;

}
export function sortSchedulesByDate(schedules){
    schedules.sort( (a, b) => {
      return _compareSchedules(a, b);
    });
    return schedules;
}

export function getFullName(teacher){
  if(teacher){
    return teacher.firstName + ' ' + teacher.lastName;
  }
}

// calendrier/cours/yoga/marianne-girard
export function getCourseTeacherLink(course, teacher){
  if(course && teacher){
    return '/calendrier/cours/' + course.slug + '/' + teacher.slug;
  }
}

// /conferences/introduction-a-laromatherapie/brigitte-berube/
export function getConferenceDetailLink(conference){
  if(conference){
    return '/conferences/detail/' + conference.slug + '/' + conference.speaker.slug;
  }
}
// ***
// /reservation/conference/introduction-a-laromatherapie/brigitte-berube/2016-06-05/09.00
export function getConferenceReservationLink(conference, schedule){
  if(conference){
    let day = moment( schedule.dayStart ).utcOffset("+00:00")
    let daySlug = day.format('YYYY-MM-DD');
    let hourSlug = day.format('HH.mm');
    return '/reservation/conference/' 
            + conference.slug + '/' 
            + conference.speaker.slug + '/'
            + daySlug + '/'
            + hourSlug;
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
    moment.locale('fr');
    var weekDates = [];
    stopDate = moment( stopDate ).utcOffset("+00:00")
    var currentDate = moment( startDate ).utcOffset("+00:00");

    // TODO replace the while by for
    let maxLoop=100;
    while ((currentDate <= stopDate) && maxLoop > 0) {
        weekDates.push( moment(currentDate) ) // .format('YYYY-MM-DD')
        currentDate = moment(currentDate).add(7, 'days');
        maxLoop--;
        if(maxLoop ==0 ){
          console.error('getWeekDates._____MAX LOOP_____')
        }
    }
    return weekDates;
}

export function getDays(_days) {
    moment.locale('fr');
    let days = [];
    if(_days && _days.length > 0){
      days = _days.map((day) =>{
        return moment( day ).utcOffset("+00:00");
      })
    }
    return days;
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
  moment.locale('fr');
  let tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
  return moment(new Date(Date.now() - tzoffset)).utcOffset(0);//.toISOString();
}

export function isScheduleExpired(schedules){
  let isExpired = true;
  if(schedules && schedules.length > 0){
    for(let index in schedules){
      let dayEnd = schedules[index].dayEnd;
      if( isNotExpired(dayEnd) ){
        isExpired = false;
      }
    }
  }
  return isExpired;
}

function getNextDayStart(dayStart){
  moment.locale('fr');
  let dayNumber = parseInt(dayStart.day());
  let nextDayStart = getNow();

  let hour = dayStart.hour();
  let minute = dayStart.minute();

  nextDayStart = nextDayStart.day(dayNumber + 7)


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

  if(now.isAfter(dayStart)){
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

export function getError(name, errors) {
  if (errors && errors[name]){
    return errors[name].message;
  } else {
    return '';
  }
}

// 28 avril 2016
export function renderDateDDMMMM(date){
  moment.locale('fr');
  return moment( date ).utcOffset("+00:00").format("DD MMMM");
}

export function renderRangeDates(start, end){
  moment.locale('fr');
  let yearStart = moment( start ).utcOffset("+00:00").format("YYYY");
  let yearEnd = moment( end ).utcOffset("+00:00").format("YYYY");

  let dateStart = moment( start ).utcOffset("+00:00").format("DD MMMM");
  let dateEnd = moment( end ).utcOffset("+00:00").format("DD MMMM");

  let rangeDates = null;
  if(yearStart == yearEnd){
    // 2 mai au 5 avril 2016
    rangeDates = dateStart + " au " + dateEnd + " " + yearEnd;
  } else {
    // 2 decembre 2016 au 5 janvier 2017
    rangeDates = dateStart + " " + yearStart + " au " + dateEnd + " " + yearEnd;
  }

  return rangeDates;
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getNumberDates(startDate, stopDate){
  return getWeekDates(startDate, stopDate).length;
}


export function getFutureSchedules(schedules){
  let futureSchedules = [];
  for(let i=0; i<schedules.length; i++){
    let schedule = schedules[i];
    let momentDay = moment(schedule.dayStart).utcOffset("+00:00");
    if(isNotExpired(momentDay)){
      futureSchedules.push(schedule);
    }
  }
  return futureSchedules;
}

function _getFirstSchedule(schedules){
  let momentSchedules = getMomentSchedules(schedules);

  // pickup random firstDate
  let firstSchedule = momentSchedules[0];
  let firstDate = momentSchedules[0].dayStart;

  for(let i=0; i<momentSchedules.length; i++){
    let date = momentSchedules[i].dayStart;
    if(date.isBefore(firstDate)){
      firstDate = date;
      firstSchedule = momentSchedules[i];
    }
  }
  return firstSchedule;
}

function _compareConferences(a, b) {

    if(a.schedules.length == 0 && b.schedules.length > 0) // a is smaller
      return -1;

    else if(a.schedules.length > 0 && b.schedules.length ==0) // b is smaller
      return 1;

    else if(a.schedules.length == 0 && b.schedules.length == 0) // does not mather
      return 0;

    else {
      let firstSA = _getFirstSchedule(a.schedules);
      let firstSB = _getFirstSchedule(b.schedules);

      if (firstSA.dayStart.isBefore(firstSB.dayStart)) // a is smaller
        return -1;
      else if (firstSA.dayStart.isAfter(firstSB.dayStart)) // b is smaller
        return 1;
      else 
        return 0;
    }
}

export function getOrderConferencesFromNow(conferences){
  conferences.schedules = getMomentSchedules(conferences.schedules);
  conferences.schedules = sortSchedulesByDate(conferences.schedules);

  conferences.sort( (a, b) => {
    a.schedules = getFutureSchedules(a.schedules);
    b.schedules = getFutureSchedules(b.schedules);
    return _compareConferences(a, b);
  });

  
  return conferences;
}

export function getMomentSchedules(schedules){
  moment.locale('fr');
  let momentSchedules = []
  if(schedules && schedules.length > 0) {
    momentSchedules = schedules.map((schedule)=>{
      let {dayStart, dayEnd} = schedule;
      dayStart =  moment( dayStart ).utcOffset("+00:00");
      dayEnd =  moment( dayEnd ).utcOffset("+00:00");

      // Overwrite dayStart and dayEnd
      schedule.dayStart = dayStart;
      schedule.dayEnd = dayEnd;

      return schedule;
    });
  }
  return momentSchedules;
}

export function getRangeSchedules(schedules){
  let dayStart, dayEnd = null;
  if(schedules){
    // convert the date of schedules list to moment date.
     schedules = getMomentSchedules(schedules);

    // init with the first schedule
    dayStart = schedules[0].dayStart;
    dayEnd = schedules[0].dayEnd;

    schedules.map( (schedule) => {
      if(dayStart.isAfter(schedule.dayStart)){
        dayStart = schedule.dayStart;
      }

      if(dayEnd.isBefore(schedule.dayEnd)){
        dayEnd = schedule.dayEnd;
      }
    });
  }

  return {
    dayStart: dayStart,
    dayEnd: dayEnd
  }
}

export function getUrlReservation(courseNameSlug, teacherSlug, courseTypeSlug, weekDayNameSlug, schedule){
  // reservation/cours/yoga/marianne-girard/yoga/lundi/16.15-17.30/
  let hourStart = moment(schedule.dayStart).utcOffset("+00:00").format("HH.mm");
  let hourEnd = moment(schedule.dayEnd).utcOffset("+00:00").format("HH.mm");

  let url = 'reservation/cours/'
    + courseNameSlug + '/' 
    + teacherSlug + '/'
    + courseTypeSlug + '/'
    + weekDayNameSlug + '/'
    + hourStart + '-'
    + hourEnd + '/'

  return url;
}