"use strict";
import moment from 'moment';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Reserve from './reserve';
import TestingDay from './testingDay';
import Hours from './hours';


export default class Schedule extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  _renderTestingDays(testingDays){

    if(testingDays) {
      let TestingDays = testingDays.map(function(testingDay){
        return <TestingDay key={testingDay._id} day={testingDay.day} />
      });
      return TestingDays;
    }
  }

  render(){
    // 'this._renderTestingDays(this.props.schedule.testingDays)'
    return(
      <li className="coursed-li-hour">
        <Hours schedule={this.props.schedule} />
        <Reserve schedule={this.props.schedule} />
        <br />
        {this._renderTestingDays(this.props.schedule.testingDays)}
      </li>
    );
  }
}