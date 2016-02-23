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

  getCalendar: function(url, callback) {
    $.get(url, callback);
  },

  getHeaders: function(scheduleFormat) {
    var headers = [];
    for(var key in scheduleFormat) {
      if(scheduleFormat.hasOwnProperty(key)) {
        headers.push(key);
      }
    }
    return headers;
  },

  getDays: function(scheduleFormat) {
    var days = [];
    for(var key in scheduleFormat) {
      if(scheduleFormat.hasOwnProperty(key)) {
        days.push(scheduleFormat[key]);
      }
    }
    return days;
  },
};

module.exports = ScheduleApi;