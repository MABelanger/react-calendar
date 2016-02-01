"use strict";

var React = require('react');

var AboutPage = React.createClass({
	render: function(){
		console.log('inside about');
		return (
			<div>
				<h1>About</h1>
				<p>
					This application use :
					<ul>
						<li>React</li>
						<li>React Router</li>
					</ul>
				</p>
			</div>
		);

	}

});

module.exports = AboutPage;
