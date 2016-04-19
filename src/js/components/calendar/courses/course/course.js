"use strict";

import React from 'react';

import classNames from  'classnames'; 

import * as calendarHelper from '../../helper';



export default class Course extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      showTeachers: false
    };
    // bind the functions to this because is not Autobinding with class es6
  }

	showHideTeachers() {
		this.setState({showTeachers: !this.state.showTeachers});
	}

	getTeachers(){
		return '';
	}



  getRenderTeachers(teachers, classes){
    var renderTeachers = teachers.map( function(teacher){
    	return (
				<div key={teacher._id} className={classes}>
					<a href="#/courses/2">
						<div className="teacher-name">
							{teacher.firstName + ' ' + teacher.lastName}
						</div>
					</a>
				</div>
			);

    });
    return renderTeachers;
  }

	getCourse() {
	    var classes = classNames( this.props.className, {
	    	'teacher' : true,
	    	'teacher-transition' : true,
	        'teacher-show': ( this.state.showTeachers == true ),
	        'teacher-hide': ( this.state.showTeachers == false )
	    } );
		return (
			<div className="course">
	    	<div className="course-header" onClick={this.showHideTeachers.bind(this)}>
	    		<div className="course-header-name">
	    			{this.props.name}
	    		</div>
	    		<div className="course-header-icon">
	    			{calendarHelper.renderLogo(this.props.logo)}
	    		</div>
	    	</div>

	    	<div className="teachers">
					{this.getRenderTeachers(this.props.teachers, classes)}
				</div>
			</div>
		);
	}

  render(){
    return this.getCourse();
  }
}

