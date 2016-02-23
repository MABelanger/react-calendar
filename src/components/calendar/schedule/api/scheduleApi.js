"use strict";
var $ = jQuery = require('jquery');

//This file is mocking a web API by hitting hard coded data.
var scheduleData = require('./scheduleData').schedule;

var _ = require('lodash');

var _clone = function(item) {
  //return cloned copy so that the item is passed by value instead of by reference
  return JSON.parse(JSON.stringify(item)); 
};

var ScheduleApi = {
  getScheduleMock: function() {
    return _clone(scheduleData); 
  },

  getSchedule: function(url, callback) {
    $.get(url, callback);
  },

  getHeaders: function(schedule) {
    var headers = [];
    for(var key in schedule) {
      if(schedule.hasOwnProperty(key)) {
        headers.push(key);
      }
    }
    return headers;
  },

  getDays: function(schedule) {
    var days = [];
    for(var key in schedule) {
      if(schedule.hasOwnProperty(key)) {
        days.push(schedule[key]);
      }
    }
    return days;
  },

  isDinnerTime: function(schedule) {
    var DINNER_TIME = 16;
    var isDinnerTime = false;
    var days = this.getDays(schedule);
    for (var i in days) {
      var courses = days[i];
      for (var j in courses) {
      var course = courses[j];
      var endHour = course.endHour.split(":")[0];
      if( endHour > DINNER_TIME ) {
        isDinnerTime = true;
      }
      }
    }
    return isDinnerTime;
  },



};

module.exports = ScheduleApi;