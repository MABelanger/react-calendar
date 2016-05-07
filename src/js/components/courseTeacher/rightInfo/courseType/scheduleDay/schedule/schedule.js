"use strict";

// Vendor modules
import moment                         from 'moment';
import React                          from 'react';
import ReactDOMServer                 from 'react-dom/server';
import * as componentHelper           from '../../../../../helper';

// Project modules
import Reserve                        from '../../../../../common/reserve';
import Hours                          from '../../../../../common/hours';
import FreeDay                        from './freeDay';

export default class Schedule extends React.Component {

  constructor(props) {
    super(props);
  }

  _renderFreeDays(freeDays){
    if(freeDays) {
      let FreeDays = freeDays.map(function(freeDay){
        return <FreeDay key={freeDay._id} day={freeDay.day} />
      });
      return FreeDays;
    }
  }

  getUrlReservation(){
    let {courseNameSlug, teacherSlug, courseTypeSlug, weekDayNameSlug, schedule} = this.props;
    return componentHelper.getUrlReservation(courseNameSlug, teacherSlug, courseTypeSlug, weekDayNameSlug, schedule);
  }

  render(){
    return(
      <li className="coursed-li-hour">
        <Hours schedule={this.props.schedule} />&nbsp;
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