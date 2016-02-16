"use strict";

var React = require('react');

var Course = React.createClass({
	render: function(){
		return (
			<div style="background-color: yellow; width:70px;">	
				<a class="cal" href="/calendar_activities/#/courses/24">
					<div style="height:100%">
						<img src="/media/course_icon/logo_yoga_Zhstq9G.png" />
						<br />&nbsp;
						10:00-<br />
						11:15<br />
						Laurence Bourgault Martin
					</div>
				</a>
			</div>
		);
	}
});

module.exports = Course;
