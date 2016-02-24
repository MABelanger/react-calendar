var React = require('react');

function getCourses() {
	return (
		<div className="col-sm-3">
			<table className="cal-menu">
				<tr>
					<td className="cal-menu-cname" colspan="2">
				    	<a href="" >
				    		<div className="text-right">
					    		<div className="cal-menu-cname-label">
					    			Yoga
					    		</div><div className="cal-menu-icon">
					    			<img src="/media/course_icon/logo_yoga_Zhstq9G.png" src="/media/course_icon/logo_yoga_Zhstq9G.png" />
					    		</div>
					    	</div>
				    	</a>
				    </td>
				</tr>
				<tr>
					<td>
						<div class="animate-show">
							<a href="#/courses/2" href="#/courses/2">
								<div class="text-right cal-menu-tname">
									Sandra Duval
								</div>
							</a>
						</div>
						<div class="animate-show">
							<a href="#/courses/3" href="#/courses/3">
								<div class="text-right cal-menu-tname">
									Isabelle Nadeau
								</div>
							</a>
						</div>
					</td>
					<td class="cal-menu-empty"></td>
				</tr>
			</table>
		</div>
	);
}

var Courses = React.createClass({
  render: function(){
    return getCourses();
  }
});

module.exports = Courses;

