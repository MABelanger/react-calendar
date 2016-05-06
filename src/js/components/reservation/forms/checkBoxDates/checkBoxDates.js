"use strict";

// Vendor modules
import React                          from 'react';
import moment                         from 'moment';

// Project modules
import * as componentHelper           from '../../../helper';
import CheckBoxDay                    from './checkBoxDay';

export default class CheckBoxDates extends React.Component {

  constructor(props) {
    super(props);
    this.initialState = {};
    this.state = this.initialState;
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
      let isoString = day.toISOString();
      return this._renderCheckBoxDay(isoString);
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

  // used by FreeDays and OnOrManyDays
  // if days == undefined -> OnOrManyDays else is FreeDays
  _getMounths(dayStart, dayEnd, days){
    let weekDates = [];
    if(days != undefined ){
      weekDates = componentHelper.getDays(days);
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
    let wrapperClass = 'form-group checkbox-wrapper';
    
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += " " + 'has-error';
    }

    return (
      <div className={wrapperClass}>
        <table>
          <tbody>
            {this._renderMounths(mounths)}
          </tbody>
        </table>
        <div className="input">{this.props.error}</div>
      </div>
    );
  }
}