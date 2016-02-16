"use strict";

var React = require('react');
var Course = require('../course/course')

/*
	link: React.PropTypes.string.isRequired,
	image: React.PropTypes.string.isRequired,
	startHour: React.PropTypes.string.isRequired,
	endHour: React.PropTypes.string.isRequired,
	professorName: React.PropTypes.string.isRequired,
*/
var Day = React.createClass({

    getInitialState: function() {
        return {
            courses: [
            	{
            		link: "link1",
            		image: "image1",
            		startHour: "startHour1",
            		endHour: "endHour1",
            		professorName: "professorName1"
            	},
            	{
            		link: "link2",
            		image: "image2",
            		startHour: "startHour2",
            		endHour: "endHour2",
            		professorName: "professorName2"
            	}

            ]
        };
    },

	eachCourse: function(course, i) {
		return (
			<Course 
				link={course.link}
				image={course.image}
				startHour={course.startHour}
				endHour={course.endHour}
				professorName={course.professorName}
			/>
		);
	},

	render: function(){
		return (
			<td>
				{this.state.courses.map(this.eachCourse)}
			</td>
		);
	}
});

module.exports = Day;
