var React = require('react');
var Logo = require('../../logo/logo');

var classNames = require( 'classnames' ); 


var Course = React.createClass({

    getInitialState: function() {
        return {showTeachers: false}
    },

	showHideTeachers: function() {
		this.setState({showTeachers: !this.state.showTeachers});

	},

	getCourse: function() {
	    var classes = classNames( this.props.className, {
	    	'teacher' : true,
	    	'teacher-transition' : true,
	        'teacher-show': ( this.state.showTeachers == true ),
	        'teacher-hide': ( this.state.showTeachers == false )
	    } );
		return (
			<div className="course">
		    	<div className="course-header" onClick={this.showHideTeachers}>
		    		<div className="course-header-name">
		    			M&eacute;dicinal
		    		</div>
		    		<div className="course-header-icon">
		    			<Logo logoName={this.props.logoName} logos={this.props.logos} />
		    		</div>
		    	</div>

		    	<div className="teachers">
					<div className={classes}>
						<a href="#/courses/2">
							<div className="teacher-name">
								Sandra Duval
							</div>
						</a>
					</div>
					<div className={classes}>
						<a href="#/courses/3">
							<div className="teacher-name">
								Isabelle Nadeau
							</div>
						</a>
					</div>
				</div>
			</div>
		);
	},

  render: function(){
    return this.getCourse();
  }
});

module.exports = Course;

