
var React = require('react');

var HomePage = React.createClass({
	render: function(){
		console.log('inside HOME');
		return (
			<div className="jumbotron">
				<h1>paragraphe</h1>
				<p>React, react.. component.</p>
			</div>
		);
	}

});

module.exports = HomePage;
