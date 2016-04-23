"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import * as componentHelper from '../../../../helper';


export default class Course extends React.Component {

  constructor(props) {
    super(props);
  }

/*

  propTypes: {
    link: React.PropTypes.string.isRequired,
    logoName: React.PropTypes.string.isRequired,
    startHour: React.PropTypes.string.isRequired,
    endHour: React.PropTypes.string.isRequired,
    professorName: React.PropTypes.string.isRequired,
  },
*/


  componentDidMount() {
    var domCourse = ReactDOM.findDOMNode(this)
    let height = domCourse.clientHeight;
    this.props.setMaxHeight(height);
  }

  render(){
    let style = {};
    if(this.props.height > 0){
      console.log('this.props.height', this.props.height)
      style.height = this.props.height + 'px'
    }

    return (
      <a 
        ref="course"
        className="cal"
        href={this.props.link}
        style={style}
      >
        <div>
          {componentHelper.renderHtml(this.props.logo)}
          <br />&nbsp;
          {this.props.hourStart}-<br />
          {this.props.hourEnd}<br />
          {this.props.professorName}
        </div>
      </a>
    );
  }
}
