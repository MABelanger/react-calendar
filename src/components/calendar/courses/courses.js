var React = require('react');
var Course = require('./course/course');

var Courses = React.createClass({

  render: function(){
    return (
    	<div className="col-sm-3">
	    	<Course logoName="yoga" logos={this.props.logos} />
	    	<Course logoName="yoga" logos={this.props.logos} />
	    </div>
   	);
  }
});

module.exports = Courses;

