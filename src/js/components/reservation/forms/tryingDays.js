"use strict";

import React from 'react';

import moment from 'moment';
import * as componentHelper       from '../../helper';
import CheckBoxDates                   from './checkBoxDates/checkBoxDates';




export default class TryingDays extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checkBoxDatesKey: 1
    }
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    // force to reset the CheckBoxDates if the props of tryingDaysDates is empty
    // so that can unckeck the selected checkBox with the default value of uncheck.
    if(nextProps.tryingDaysDates.length == 0){
      let newKey = this.state.checkBoxDatesKey + 1;
      this.setState({
        checkBoxDatesKey: newKey
      });
    }
  }


  _getSelectedList(tryingDaysDates){
    let FreeDayDates = tryingDaysDates.map((tryingDaysDate, index) =>{
      return(<li key={index}>{tryingDaysDate}</li>);
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
          {this._getSelectedList(this.props.tryingDaysDates)}
        </ul>
      </span>
    );
  }
}


            
