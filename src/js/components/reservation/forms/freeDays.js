"use strict";

import React from 'react';

import moment from 'moment';
import * as componentHelper       from '../../helper';
import CheckBoxDates                   from './checkBoxDates/checkBoxDates';




export default class FreeDays extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checkBoxDatesKey: 1
    }
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    // force to reset the CheckBoxDates if the props of freeDayDates is empty
    // so that can unckeck the selected checkBox with the default value of uncheck.
    if(nextProps.freeDayDates.length == 0){
      let newKey = this.state.checkBoxDatesKey + 1;
      this.setState({
        checkBoxDatesKey: newKey
      });
    }
  }


  _getSelectedList(freeDayDates){
    let FreeDayDates = freeDayDates.map((freeDayDate, index) =>{
      return(<li key={index}>{freeDayDate}</li>);
    });
    return FreeDayDates;
  }

  render(){
    return (
      <span>
        <CheckBoxDates
          key={this.state.checkBoxDatesKey}
          {...this.props}
        />
        {this.props.msg}
        <ul>
          {this._getSelectedList(this.props.freeDayDates)}
        </ul>
      </span>
    );
  }
}


            
