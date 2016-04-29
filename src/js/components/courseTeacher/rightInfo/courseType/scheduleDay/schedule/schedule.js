"use strict";
import moment from 'moment';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import * as componentHelper from '../../../../../helper';

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

  // reservation/cours/yoga/marianne-girard/yoga/lundi/16.15-17.30/
  getUrlReservation(){
    
    let {courseNameSlug, teacherSlug, courseTypeSlug, weekDayNameSlug, schedule} = this.props;
    console.log('getUrlReservation.coursNameSlug', courseNameSlug)

    return componentHelper.getUrlReservation(courseNameSlug, teacherSlug, courseTypeSlug, weekDayNameSlug, schedule);
  }

  render(){
    // 'this._renderFreeDays(this.props.schedule.freeDays)'
    return(
      <li className="coursed-li-hour">
        <Hours schedule={this.props.schedule} />
        <Reserve
          schedule={this.props.schedule}
          url={this.getUrlReservation()}
        />
        <br />
        {this._renderFreeDays(this.props.schedule.freeDays)}
      </li>
    );
  }
}