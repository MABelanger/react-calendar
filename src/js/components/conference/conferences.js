"use strict";

// Vendor modules
import React                          from 'react';
import Conference                     from './conference';
import * as componentHelper           from '../helper';

// Project modules




export default class Conferences extends React.Component {

  constructor(props) {
    super(props);
  }



  _renderConferences(conferences){
    
    let Conferences = conferences.map((conference, index) =>{
      //let scheduleCompleted = componentHelper.isScheduleExpired(conference.schedules);

      if(conference.schedules.length > 0){
        return (
          <Conference 
            key={index}
            conference={conference}
          />
        );
      } else {
        return null;
      }
    });

    return Conferences;
  }

  render(){
    let Conferences = null;
    if(this.props.conferences.length > 0){
      Conferences = this._renderConferences(this.props.conferences)
    }
    return (
      <div>
        {Conferences}
      </div>
    );
  }
}
