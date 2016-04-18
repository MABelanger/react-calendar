"use strict";
var _ = require('lodash');

var _clone = function(item) {
  //return cloned copy so that the item is passed by value instead of by reference
  return JSON.parse(JSON.stringify(item)); 
};

var CalendarApi = {

  getSchedule: function(result) {
    return result.schedule;
  },

  getLogos: function(result) {
    return result.logos;
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
};

module.exports = CalendarApi;