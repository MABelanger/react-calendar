"use strict";

import React from 'react';
import Request from 'superagent';
import Schedule from './schedule/schedule';

import Courses from './courses/courses';


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

  /**
   * Read
   **/
  list(callback) {
    var URL = 'http://localhost:3000/api/courses';
    Request
    .get(URL, function(err, res){
      callback(res.body);
    });
  }

  componentDidMount() {
    this.serverRequest = this.list(function (result) {

      this.setState({
        courses: result
      });

    }.bind(this));
  }


  render(){
    return (
      <div className="row">
        <Courses courses={this.state.courses}/>
        <Schedule courses={this.state.courses}/>
      </div>
    );
  }

}
