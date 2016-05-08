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
    this.state = {
      schedule : {
        headers : [],
        days: []
      },
      logos: [],
      courses : []
    };
    // bind the functions to this because is not Autobinding with class es6
  }



  render(){
    console.log('this.props.courses', this.props.courses)
    return (
      <div className="row">
        <Courses courses={this.props.courses}/>
        <Schedule courses={this.props.courses}/>
      </div>
    );
  }

}
