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
    return(
      <a className="link-url" href="#/day_schedules/reserve/46">
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
  render(schedules){
    return(
      <div class="row ng-scope">
        <div class="col-sm-12">
          <p> </p>
          <ul class="">
            <li class="coursed-li-schedule ng-scope">
              <span class="all-label ng-binding">Yoga</span>:
              <p>Noter qu'il n'y aura PAS de cours du 22 au 30 avril!</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}






