"use strict";

// Vendor modules
import React                          from 'react';

// Project modules
import * as componentHelper            from '../../../../../helper';

export default class FreeDay extends React.Component {

  constructor(props) {
    super(props);
  }

  _getDay(dayFormat){
    if(dayFormat){
      return(
        <span className="txt-red">
          <small>(Gratuit le {dayFormat})</small><br />
        </span>
      );
    }else {
      return (dayFormat)
    }
  }

  render(){
    let day = this.props.day;
    let dayFormat = null;
    if( day && componentHelper.isNotExpired(day) ){
      dayFormat = componentHelper.getDayFormat(day);
    }
    return(
       this._getDay(dayFormat)
    );
  }
}
