"use strict";

// Vendor modules
import moment                         from 'moment';
import React                          from 'react';
import ReactDOMServer                 from 'react-dom/server';

// Project modules
import * as componentHelper            from '../../../../../helper';  

export default class FreeDay extends React.Component {

  constructor(props) {
    super(props);
  }

  _getDay(dayFormat){
    if(dayFormat){
      return(
        <span className="tab txt-red">
          (Gratuit le {dayFormat} )<br />
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