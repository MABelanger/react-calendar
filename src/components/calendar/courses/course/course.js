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
	    	'teachers-animate-transition' : true,
	        'teachers-show': ( this.state.showTeachers == true ),
	        'teachers-hide': ( this.state.showTeachers == false )
	    } );
		return (
			<table className="cal-menu">
				<tr>
					<td className="cal-menu-cname" colSpan="2">
				    	<a href="#" onClick={this.showHideTeachers}>
				    		<div className="text-right">
					    		<div className="cal-menu-cname-label">
					    			Yoga
					    		</div>
					    		<div className="cal-menu-icon">
					    			<Logo logoName={this.props.logoName} logos={this.props.logos} />
					    		</div>
					    	</div>
				    	</a>
				    </td>
				</tr>
				<tr>
					<td>
						<div className="animate-teachers-transition animate-teachers-hide">
							<a href="#/courses/2" href="#/courses/2">
								<div className="text-right cal-menu-tname">
									Sandra Duval
								</div>
							</a>
						</div>
						<div className="animate-teachers-transition">
							<a href="#/courses/3" href="#/courses/3">
								<div className="text-right cal-menu-tname">
									Isabelle Nadeau
								</div>
							</a>
						</div>
					</td>
					<td className="cal-menu-empty"></td>
				</tr>
			</table>
		);
	},

  render: function(){
    return this.getCourse();
  }
});

module.exports = Course;

