"use strict";
import moment from 'moment';
import React from 'react';
import ReactDOMServer from 'react-dom/server';


export default class Reserve extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }



  renderReserve(schedule){
    let url = this.props.url;
    console.log('url', url)
    return(
      <a className="link-url" href={url}>
        Réserver
      </a>
    );
  }

  _renderIsFull(){
    return (
      <strong>
        <u>Complet</u>
      </strong>
    );
  }
  render(){
    let schedule = this.props.schedule;
    if(schedule.isFull){
      return this._renderIsFull();
    } else{
      return this.renderReserve(schedule);
    }
  }
}