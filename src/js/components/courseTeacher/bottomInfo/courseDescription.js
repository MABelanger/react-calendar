"use strict";

// Vendor modules
import React                          from 'react';
import ReactDOMServer                 from 'react-dom/server';

// Project modules
import * as componentHelper           from '../../helper';

export default class LeftInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  _getValue(course, teacher){
    let courseName = null;
    let fullName = null;
    let description = null;

    if(course && teacher){
      courseName = course.name;
      fullName = componentHelper.getFullName(teacher);
      description = teacher.course.description;
    }

    return {
      courseName: courseName,
      fullName: fullName,
      description: <span dangerouslySetInnerHTML={{__html: description }}></span>
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