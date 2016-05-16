"use strict";

// Vendor modules
import React                          from 'react';
import ReactDOM                       from 'react-dom';
import {Link}                         from 'react-router';

// Project modules
import * as componentHelper           from '../../../../helper';

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
      style.height = this.props.height + 'px'
    }

    return (
      <Link className="link-url" 
        ref="course"
        className="cal"
        to={this.props.link}
        style={style}
      >
        <div>
          <span dangerouslySetInnerHTML={{__html: this.props.logo }}></span>
          <br />{this.props.hourStart}-<br />{this.props.hourEnd}&nbsp;<br />{this.props.professorName}
        </div>
      </Link>
    );
  }
}