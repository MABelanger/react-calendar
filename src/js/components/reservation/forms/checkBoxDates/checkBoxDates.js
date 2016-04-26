"use strict";

import React from 'react';

import moment from 'moment';
import * as componentHelper       from '../../../helper';
import CheckBoxDay from './checkBoxDay';


export default class CheckBoxDates extends React.Component {

  constructor(props) {
    super(props);
    this.initialState = {};
    this.state = this.initialState;
  }

  componentDidMount() {

  }


  _getMounthYear(date){
    return moment(date).format('MMMM YYYY')
  }

  _renderCheckBoxDay(name){
    return(
      <CheckBoxDay
        key={name}
        name={name}
        ref={name}
        checked={this.state[name]}
        changeValue={this.props.changeValue}
      />
    );
  }

  _renderCheckBoxDays(mounth){
    let CheckBoxDays = mounth.map((day) => {
      return this._renderCheckBoxDay(day);
    });
    return CheckBoxDays;
  }

  _renderMounth(mounth){
    let firstDay = mounth[0];
    let mounthYear = this._getMounthYear(firstDay);
    let CheckBoxDays = this._renderCheckBoxDays(mounth);
    return(
      <tr key={mounthYear}>
        <td className="reservation-month-name">
          <strong>{mounthYear}</strong>
        </td>
        {CheckBoxDays}
      </tr>
    );
  }



  _splitWeekDatesByMounth(weekDates){
    let mounths = componentHelper.create2DArray(12);
    weekDates.map(function(date){
      let index = date.format('M');
      mounths[index].push(date);
    });
    return componentHelper.removeEmptyArray(mounths);    
  }

  _getMounths(dayStart, dayEnd, days){
    let weekDates = null;
    if(days && days.length > 0){
      weekDates = days;
    }else{
      weekDates = componentHelper.getWeekDates(dayStart, dayEnd);
    }
    
    let mounths = this._splitWeekDatesByMounth(weekDates);
    return mounths;
  }

  _renderMounths(mounths){
    let Mounths = mounths.map((mounth) => {
      return this._renderMounth(mounth);
    });
    return Mounths;
  }
  
  render(){
    let {dayStart, dayEnd, days} = this.props;
    let mounths = this._getMounths(dayStart, dayEnd, days);
    return (
      <table>
        <tbody>
          {this._renderMounths(mounths)}
        </tbody>
      </table>
    );
  }
}


            
