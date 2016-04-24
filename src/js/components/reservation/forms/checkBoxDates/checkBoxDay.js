"use strict";

import React from 'react';




export default class CheckBox extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  _getDayNumber(date){
    return date;
  }
  render(){
    let {date} = this.props;
    console.log('date', date)
    let dayNumber = this._getDayNumber(date);
    return (
      <td class="text-center reservation-day">
        <label class="reservation-label" for={date}> {dayNumber} </label>
        <input id={date} class="reservation-checkbox" name="selectedDays" type="checkbox" value={date} />
        <label class="reservation-label" for={date}></label>
      </td>
    );
  }

}


            
