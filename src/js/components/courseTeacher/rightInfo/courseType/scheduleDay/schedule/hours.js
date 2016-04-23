"use strict";
import moment from 'moment';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as componentHelper       from '../../../../../helper';


export default class Hours extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render(){
    let schedule = this.props.schedule;
    let {hourStart, hourEnd} = componentHelper.getHourRange(schedule);
    return(
      <span>
        {hourStart} à {hourEnd}
      </span>
    );
  }
}