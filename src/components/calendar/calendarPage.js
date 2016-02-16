var React = require('react');
var Day = require('../day/day');

var CalendarPage = React.createClass({
	
	render: function(){
		console.log('inside', 'CalendarPage')
		return (
			<div>
				<table>
					<tr>
						<td>
							Lundi
						</td>
						<td>
							Mardi
						</td>
					</tr>
					<tr>
						< Day />
						< Day />
					</tr>
				</table>
			</div>
		);
	}
});

module.exports = CalendarPage;
