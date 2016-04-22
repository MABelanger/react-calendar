"use strict";
import moment from 'moment';
import React from 'react';
import ReactDOMServer from 'react-dom/server';


export default class Hours extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render(){
    let schedule = this.props.schedule;
    let hourStart = moment( schedule.dayStart ).utcOffset("+00:00").format("HH:mm");
    let hourEnd = moment( schedule.dayEnd ).utcOffset("+00:00").format("HH:mm");
    return(
      <span>
        {hourStart} à {hourEnd}
      </span>
    );
  }
}