"use strict";

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as componentHelper from '../../helper';

import './styles.scss';

export default class LeftInfo extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  // description: teacher.course.description
  // price: teacher.course.price
  // let courseType = teacher.course.courseType;


  render(){
    if(this.props.courseTeacher){
      let course = this.props.courseTeacher.course;
      let teacher = this.props.courseTeacher.teacher;
      return (
        <div className="col-sm-4 text-center">
            <h4 className="text-center text-uppercase">{teacher.firstName + ' ' + teacher.lastName}</h4>
            <img className="coursed-image radius-img" src={'http://www.mondeavie.ca/' + teacher.course.image}/>
            <br/>
            <br/>
            <div className="text-center">
              <a href="#/courses" className="btn my-btn"> &lt; Retour au calendrier</a>
            </div>
        </div>
      );
    } else {
      return(<div></div>);
    }
  }
}

