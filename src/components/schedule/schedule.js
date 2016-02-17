var React = require('react');
var Day = require('../day/day');

var Schedule = React.createClass({

	getHeaders: function(scheduleFormat) {
		var headers = [];
		for(var key in scheduleFormat) {
		    if(scheduleFormat.hasOwnProperty(key)) {
		        //scheduleFormat[key];
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


	getSchedule: function() {
        return {
			lundi : [
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
			],

			mardi: [
		    	{
		    		link: "link1b",
		    		image: "image1b",
		    		startHour: "startHour1b",
		    		endHour: "endHour1b",
		    		professorName: "professorName1b"
		    	},
		    	{
		    		link: "link2b",
		    		image: "image2b",
		    		startHour: "startHour2b",
		    		endHour: "endHour2b",
		    		professorName: "professorName2b"
		    	}
			]
        };
	},

    getInitialState: function() {
    	var schedule = this.getSchedule();
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
