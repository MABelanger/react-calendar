"use strict";

import React from 'react';

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
      return(<li>freeDayDate</li>);
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


            
