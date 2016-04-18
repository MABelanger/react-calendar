var React = require('react');
var Course = require('./course/course');

var Courses = React.createClass({

  getRenderCourses: function(courses){
    var renderCourses = courses.map( function(course){
      return <Course name={course.name} logos={course.svg} teachers={course.teachers} />;
    });
    return renderCourses;
  },

  render: function(){
    return (
    	<div className="courses col-sm-3">
        {this.getRenderCourses(this.props.courses)}
	    </div>
   	);
  }
});

module.exports = Courses;

