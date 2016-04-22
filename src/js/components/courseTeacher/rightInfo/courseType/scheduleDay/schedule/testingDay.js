"use strict";
import moment from 'moment';
import React from 'react';
import ReactDOMServer from 'react-dom/server';


export default class FreeDay extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  _getDate(date){
    return date;
  }

  render(){
    return(
      <span class="txt-red">
        (Gratuit le {this._getDate(this.props.testingDay)} )<br />
      </span>
    );
  }
}