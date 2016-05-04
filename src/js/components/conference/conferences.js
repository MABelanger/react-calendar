"use strict";

// Vendor modules
import React                          from 'react';
import Conference                     from './conference';

// Project modules


export default class Conferences extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }


  _renderConferences(conferences){
    let Conferences = conferences.map((conference, index) =>{
      return (
        <Conference 
          key={index}
          conference={conference}
        />
      );
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
