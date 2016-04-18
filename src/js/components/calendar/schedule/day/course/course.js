"use strict";

import React from 'react';
import Logo from '../../../logo/logo';

export default class Course extends React.component {

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
          <Logo logoName={this.props.logoName} logos={this.props.logos} />
          <br />&nbsp;
          {this.props.startHour}-<br />
          {this.props.endHour}<br />
          {this.props.professorName}
        </div>
      </a>
    );
  }
}
