var React = require('react');
var Day = require('../day/day');

var Schedule = React.createClass({

    getInitialState: function() {
        return {
        	days : [
	            [
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
	            [
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
	        ]
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

	render: function(){
		console.log('inside', 'Schedule', this.state.days)
		return (
			<div>
				<table>

					<tr>
						<th>
							Lundi
						</th>
						<th>
							Mardi
						</th>
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
