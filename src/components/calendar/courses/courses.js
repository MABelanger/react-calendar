var React = require('react');
var Logo = require('../logo/logo');



var Courses = React.createClass({

	getCourses: function() {
		return (
			<div className="col-sm-3">
				<table className="cal-menu">
					<tr>
						<td className="cal-menu-cname" colSpan="2">
					    	<a href="" ng-click="teacher_hide = !teacher_hide">
					    		<div className="text-right">
						    		<div className="cal-menu-cname-label ng-binding">
						    			Yoga
						    		</div>
						    		<div className="cal-menu-icon">
						    			<Logo logoName="yoga" logos={this.props.logos} />
						    		</div>
						    	</div>
					    	</a>
					    </td>
					</tr>
					<tr>
						<td>
							<div className="animate-show">
								<a href="#/courses/2" href="#/courses/2">
									<div className="text-right cal-menu-tname">
										Sandra Duval
									</div>
								</a>
							</div>
							<div className="animate-show">
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
			</div>
		);
	},

  render: function(){
    return this.getCourses();
  }
});

module.exports = Courses;

