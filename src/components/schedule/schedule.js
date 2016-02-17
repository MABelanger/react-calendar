var React = require('react');
var Day = require('../day/day');

var Schedule = React.createClass({

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


	isDinnerTime: function(scheduleFormat) {
		var DINNER_TIME = 16;
		var isDinnerTime = false;
		var days = this.getDays(scheduleFormat);
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

	getSchedule: function() {
        return {
			lundi : [
		    	{
		    		link: "link1",
		    		image: "http://www.mondeavie.ca/media/course_icon/logo_ki_gong_D2eqw4b.png",
		    		startHour: "09:00",
		    		endHour: "11:30",
		    		professorName: "professorName1"

		    	},
		    	{
		    		link: "link2",
		    		image: "http://www.mondeavie.ca/media/course_icon/logo_ki_gong_D2eqw4b.png",
		    		startHour: "13:00",
		    		endHour: "15:30",
		    		professorName: "professorName2"
		    	}
			],
			mardi: [
		    	{
		    		link: "link1b",
		    		image: "http://www.mondeavie.ca/media/course_icon/logo_ki_gong_D2eqw4b.png",
		    		startHour: "09:00",
		    		endHour: "12:30",
		    		professorName: "professorName1b"
		    	},
		    	{
		    		link: "link2b",
		    		image: "http://www.mondeavie.ca/media/course_icon/logo_ki_gong_D2eqw4b.png",
		    		startHour: "12:30",
		    		endHour: "15:00",
		    		professorName: "professorName2b"
		    	},
		    	{
		    		link: "link3b",
		    		image: "http://www.mondeavie.ca/media/course_icon/logo_ki_gong_D2eqw4b.png",
		    		startHour: "16:00",
		    		endHour: "18:30",
		    		professorName: "professorName3b"
		    	}
			]
        };
	},

    getInitialState: function() {
    	var schedule = this.getSchedule();
    	console.log(this.isDinnerTime(schedule));
    	return {
    		headers: this.getHeaders(schedule),
    		days: this.getDays(schedule)
    	};

    },

	eachDay: function(day, i) {
		var courses = day
		return (
			<Day 
				courses={courses}
			/>
		);
	},

	eachHeader: function(header, i) {
		return (
			<th>{header}</th>
		);
	},

	render: function(){
		console.log('inside', 'Row', this.state.days)
		return (
			<div>
				<table>
					<tr>
						{this.state.headers.map(this.eachHeader)}
					</tr>
					<tr>
						{this.state.days.map(this.eachDay)}
					</tr>
				</table>
			</div>
		);
	}
});

module.exports = Schedule;
