"use strict";

// Vendor modules
import React                          from 'react';
import Request                        from 'superagent';

// Project modules
import Schedule                       from './schedule/schedule';
import Courses                        from './courses/courses';

export default class Calendar extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="row">
        <Courses courses={this.props.courses}/>
        <Schedule courses={this.props.courses}/>
      </div>
    );
  }
}
