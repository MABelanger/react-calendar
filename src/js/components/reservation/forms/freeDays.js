"use strict";

import React from 'react';

import moment from 'moment';
import * as componentHelper       from '../../helper';
import CheckBoxDates                   from './checkBoxDates/checkBoxDates';




export default class FreeDays extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  _getSelectedList(freeDayDates){
    let FreeDayDates = freeDayDates.map((freeDayDate) =>{
      let weekDayName = moment.weekdays( moment(freeDayDate).day() );
      //let dateStr = weekDayName ', ' + 

      let dateStr = moment(freeDayDate).format('LL');
      return(<li>{dateStr}</li>);
    });
    return FreeDayDates;
  }

  render(){
    return (
      <span>
        <CheckBoxDates {...this.props}/>
        {this.props.msg}
        <ul>
          {this._getSelectedList(this.props.freeDayDates)}
        </ul>
      </span>
    );
  }

}


            
