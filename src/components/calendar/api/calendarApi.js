"use strict";
var $ = jQuery = require('jquery');

var _ = require('lodash');

var _clone = function(item) {
  //return cloned copy so that the item is passed by value instead of by reference
  return JSON.parse(JSON.stringify(item)); 
};

var CalendarApi = {

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

module.exports = CalendarApi;