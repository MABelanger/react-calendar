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


/*
Su Mo Tu We Th Fr Sa
                1  2
 3  4  5  6  7  8  9
10 11 12 13 14 15 16
17 18 19 20 21 22 23
24 25 26 27 28 29 30
*/
  render(){
    return (
      <span>
      <CheckBoxDates dayStart="2016-04-01T17:30:00.000Z" dayEnd="2016-04-30T17:30:00.000Z"/>
      </span>
    );
  }

}


            
