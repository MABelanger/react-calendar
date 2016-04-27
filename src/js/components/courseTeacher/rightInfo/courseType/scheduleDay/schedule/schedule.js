"use strict";
import moment from 'moment';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Reserve from './reserve';
import FreeDay from './freeDay';
import Hours from './hours';


export default class Schedule extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  _renderFreeDays(freeDays){

    if(freeDays) {
      let FreeDays = freeDays.map(function(freeDay){
        return <FreeDay key={freeDay._id} day={freeDay.day} />
      });
      return FreeDays;
    }
  }

  render(){
    // 'this._renderFreeDays(this.props.schedule.freeDays)'
    return(
      <li className="coursed-li-hour">
        <Hours schedule={this.props.schedule} />
        <Reserve schedule={this.props.schedule} />
        <br />
        {this._renderFreeDays(this.props.schedule.freeDays)}
      </li>
    );
  }
}