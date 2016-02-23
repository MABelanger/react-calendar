"use strict";

var React = require('react');
var Course = require('./course/course')

/*
  link: React.PropTypes.string.isRequired,
  courseName: React.PropTypes.string.isRequired,
  startHour: React.PropTypes.string.isRequired,
  endHour: React.PropTypes.string.isRequired,
  professorName: React.PropTypes.string.isRequired,
*/
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
        courseName={course.courseName}
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
