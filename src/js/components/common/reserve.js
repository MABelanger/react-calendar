"use strict";

// Vendor modules
import moment                         from 'moment';
import React                          from 'react';
import {Link}                         from 'react-router';
import ReactDOMServer                 from 'react-dom/server';

// Project modules
import * as componentHelper           from '../helper';

export default class Reserve extends React.Component {

  constructor(props) {
    super(props);
  }

  renderReserve(schedule){
    let url = this.props.url;
    return(
      <Link className="link-url" to={url}>Réserver</Link>
    );
  }

  _renderIsFull(){
    return (
      <strong>
        <u>Complet</u>
      </strong>
    );
  }

  _renderIsCompleted(){
    return (
      <strong>
        <u>Terminé</u>
      </strong>
    );
  }

  render(){
    let schedule = this.props.schedule;
    if(schedule.isFull){
      return this._renderIsFull();

    } else if ( !componentHelper.isNotExpired(schedule.dayEnd) ){
      return this._renderIsCompleted();

    } else {
      return this.renderReserve(schedule);
    }
  }
}