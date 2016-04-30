"use strict";
import moment from 'moment';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as componentHelper       from '../../../../../helper';  



export default class FreeDay extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  _getDate(date){
    return date;
  }


  _renderDay(day){
    if( componentHelper.isNotExpired(day) ){
      let dayFormat = componentHelper.getDayFormat(day);
      return(
        <span className="tab txt-red">
          (Gratuit le {dayFormat} )<br />
        </span>
      );
    } else {
      return(
        <span></span>
      );
    }
  }

  render(){
    return(
      this._renderDay(this.props.day)
    );
  }
}