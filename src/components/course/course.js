"use strict";

var React = require('react');

var Course = React.createClass({

	propTypes: {
		link: React.PropTypes.string.isRequired,
		image: React.PropTypes.string.isRequired,
		startHour: React.PropTypes.string.isRequired,
		endHour: React.PropTypes.string.isRequired,
		professorName: React.PropTypes.string.isRequired,
	},
		
	render: function(){
		console.log('inside', 'Course')
		return (
			<div>	
				<a className="cal" href="{this.props.link}">
					<div>
						<img src="{this.props.imge}" />
						<br />&nbsp;
						{this.props.startHour}-<br />
						{this.props.endHour}<br />
						{this.props.professorName}
					</div>
				</a>
			</div>
		);
	}
});

module.exports = Course;
