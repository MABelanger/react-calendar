"use strict";

import React from 'react';

import moment from 'moment';
import * as componentHelper       from '../../helper';
import TextInput                  from '../../common/textInput';

// Flux Reservation
import ReservationStore              from '../../../stores/reservationStore';
import * as ReservationActions       from '../../../actions/reservationActions';
import ReservationConstants          from '../../../constants/reservationConstants';

// TODO make a parent for this and freeDays...

const NAME = 'name';
const TEL = 'tel';
const EMAIL = 'email';
const NOTE = 'note';

const CHANGE_EVENT = ReservationConstants.CHANGE_EVENT;

const initialState = {
    /* etc */
};

export default class TextForm extends React.Component {

  constructor(props) {
    super(props);
    this.clearFields = this.clearFields.bind(this);
    this.state = initialState;
  }

  componentWillMount() {
    //ReservationStore.on(CHANGE_EVENT, this.clearFields);
  }

  componentWillUnmount() {
    //ReservationStore.removeListener(CHANGE_EVENT, this.clearFields);
  }

  getFields(){
    return {
      name: this.state[NAME],
      tel: this.state[TEL],
      email: this.state[EMAIL],
      note: this.state[NOTE]
    };
  }

  clearFields(){
    let newState = {}
    for (var key in this.state) {
      if (this.state.hasOwnProperty(key)) {  
        newState[key] = "";
      }
    }
    this.setState( newState );
    console.log('clearFields', this.state);
  }

  componentDidMount() {

  }


  changeValue(name, value) {
    let newState = {};
    newState[name] = value;
    this.setState(newState);
    console.log('this.state', this.state)
    
  }

  render(){
    //sectionHelper.getError("tel", this.props.errors)

    return (
      <form class="reserv" role="form">
        
        <TextInput
          placeholder="Nom"
          name={NAME}
          ref={NAME}
          error=""
          value={this.state[NAME]}
          changeValue={ (name, value) => { this.changeValue(name, value); } }
        />

        <TextInput
          placeholder="Téléphone"
          name={TEL}
          ref={TEL}
          error=""
          value={this.state[TEL]}
          changeValue={ (name, value) => { this.changeValue(name, value); } }
        />

        <TextInput
          placeholder="Courriel"
          name={EMAIL}
          ref={EMAIL}
          error=""
          value={this.state[EMAIL]}
          changeValue={ (name, value) => { this.changeValue(name, value); } }
        />

        <TextInput
          placeholder="Note (optionnel)"
          name={NOTE}
          ref={NOTE}
          error=""
          value={this.state[NOTE]}
          rows={2}
          changeValue={ (name, value) => { this.changeValue(name, value); } }
        />

      </form>
    );
  }
}


            
