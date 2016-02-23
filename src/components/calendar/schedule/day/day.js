"use strict";

var React = require('react');
var Course = require('./course/course')


var Day = React.createClass({

  getInitialState: function() {
    return {
      courses: []
    };
  },

  eachCourse: function(course, i) {
    return (
      <Course 
        link={course.link}
        logoName={course.logoName}
        logos={this.props.logos}
        startHour={course.startHour}
        endHour={course.endHour}
        professorName={course.professorName}
      />
    );
  },

  render: function(){
    return (
      <td nameClass="cal">
        {this.props.courses.map(this.eachCourse)}
      </td>
    );
  }
});

module.exports = Day;
