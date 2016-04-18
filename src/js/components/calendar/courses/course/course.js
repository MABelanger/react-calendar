"use strict";

import React from 'react';

import classNames from  'classnames'; 



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

	renderLogo(svg){
		return (
			<span dangerouslySetInnerHTML={{__html: svg }} ></span>
    );
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
		    			{this.renderLogo(this.props.svg)}
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
	}

  render(){
    return this.getCourse();
  }
}

