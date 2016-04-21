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
      console.log('this.props', this.props);
      let course = this.props.courseTeacher.course;
      let teacher = this.props.courseTeacher.teacher;
      console.log('teacher', teacher);
      return (
        <div class="col-sm-4 text-center">
            <h4 class="text-center text-uppercase">{teacher.firstName + ' ' + teacher.lastName}</h4>
            <img class="coursed-image radius-img" src={'http://www.mondeavie.ca/' + teacher.course.image}/>
            <br/>
            <br/>
            <div class="text-center">
              <a href="#/courses" class="btn my-btn"> &lt; Retour au calendrier</a>
            </div>
        </div>
      );
    } else {
      return(<div></div>);
    }
  }
}


