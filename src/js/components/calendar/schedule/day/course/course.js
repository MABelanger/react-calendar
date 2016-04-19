"use strict";

import React from 'react';
import * as calendarHelper from '../../../helper';


export default class Course extends React.Component {

/*

  propTypes: {
    link: React.PropTypes.string.isRequired,
    logoName: React.PropTypes.string.isRequired,
    startHour: React.PropTypes.string.isRequired,
    endHour: React.PropTypes.string.isRequired,
    professorName: React.PropTypes.string.isRequired,
  },
*/


  render(){
    return (
      <a className="cal" href="{this.props.link}">
        <div>
          {calendarHelper.renderLogo(this.props.logo)}
          <br />&nbsp;
          {this.props.hourStart}-<br />
          {this.props.hourEnd}<br />
          {this.props.professorName}
        </div>
      </a>
    );
  }
}
