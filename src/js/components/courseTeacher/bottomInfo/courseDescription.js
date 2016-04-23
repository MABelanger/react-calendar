"use strict";

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as componentHelper from '../../helper';


export default class LeftInfo extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  _getValue(course, teacher){
    let courseName = null;
    let fullName = null;
    let description = null
    if(course && teacher){
      courseName = course.name;
      fullName = componentHelper.getFullName(teacher);
      description = componentHelper.renderHtml(teacher.course.description);
    }
    return {
      courseName: courseName,
      fullName: fullName,
      description: description
    }
  }

  render(){
    let {course, teacher} = this.props;
    let {courseName, fullName, description} = this._getValue(course, teacher);

    return(
      <div className="row">
        <div className="col-sm-12">
          <br /> 
          <span className="all-label">
            Cours de {courseName} avec {fullName}
          </span>,
            {description}
        </div>
      </div>
    )
  }

}


