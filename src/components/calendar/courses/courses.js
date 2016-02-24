var React = require('react');

function getCourses() {
	return (
		<div className="col-sm-3">
			<table className="cal-menu ng-scope">
				<tr>
					<td className="cal-menu-cname" colspan="2">
				    	<a href="" ng-click="teacher_hide = !teacher_hide">
				    		<div className="text-right">
					    		<div className="cal-menu-cname-label ng-binding">
					    			Yoga
					    		</div><div className="cal-menu-icon">
					    			<img ng-src="/media/course_icon/logo_yoga_Zhstq9G.png" src="/media/course_icon/logo_yoga_Zhstq9G.png" />
					    		</div>
					    	</div>
				    	</a>
				    </td>
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

