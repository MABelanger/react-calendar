"use strict";

// Vendor modules
import React                          from 'react';
import ReactDOMServer                 from 'react-dom/server';
import { Link }                       from "react-router";

// Proejct modules
import BackBtn                        from '../../common/backBtn';
import * as componentHelper           from '../../helper';

// Proejct styles
import './styles.scss';

export default class LeftInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  _gerSrc(teacher){
    let imgSrc = null;
    if (teacher) {
      if (teacher.course && teacher.course.image && teacher.course.image.url) {
        imgSrc = 'http://localhost:3000/' + teacher.course.image.url;
      }
    }
    return imgSrc;
  }

  render(){
    let {course, teacher} = this.props;
    let fullName = componentHelper.getFullName(teacher);
    return (
      <div className="col-sm-4 text-center">
        <h4 className="text-center text-uppercase">{fullName}</h4>
        <img className="coursed-image radius-img" src={this._gerSrc(teacher)}/>
        <br/>
        <br/>
        <BackBtn 
          txt='Retour au calendrier'
          click={this.props.backBtnClick}
        />
      </div>
    );
  }
}