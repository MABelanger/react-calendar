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


  render(){
    return(
      <span>
        <a class="link-url" href="#/day_schedules/reserve/46">
          Réserver
        </a>

        <strong>
          <u>Complet</u>
        </strong>
      </span>
    );
  }
}





