"use strict";

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import BackBtn from '../../common/backBtn';

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

  _gerSrc(teacher){
    if(teacher){
      return 'http://www.mondeavie.ca/'+ teacher.course.image;
    }
  }

  render(){
    let {course, teacher} = this.props;
    let fullName = componentHelper.getFullName(teacher);
    return (
      <div className="col-sm-4 text-center">
          <h4 className="text-center text-uppercase">{fullName}</h4>
          <img className="coursed-image radius-img" src={this._gerSrc(teacher)}/>
          <br/>
          <br/>
          <BackBtn txt='Retour au calendrier'/>
      </div>
    );
  }
}


