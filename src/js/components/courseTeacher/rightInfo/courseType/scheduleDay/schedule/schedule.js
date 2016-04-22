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
        console.log('testingDay', testingDay)
        return <TestingDay testingDay={testingDay} />
      });
      return TestingDays;
    }
  }

  render(){

    return(
      <li class="coursed-li-hour">
        <Hours schedule={this.props.schedule} />
        <Reserve schedule={this.props.schedule} />
        <br />
        {this._renderTestingDays(this.props.schedule.testingDays)}
      </li>
    );
  }
}