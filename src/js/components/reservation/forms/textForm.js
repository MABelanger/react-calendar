"use strict";

// Vendor modules
import React                          from 'react';
import moment                         from 'moment';

// Project modules
import * as componentHelper           from '../../helper';
import TextInput                      from '../../common/textInput';

// Flux Reservation
import ReservationStore               from '../../../stores/reservationStore';
import * as ReservationActions        from '../../../actions/reservationActions';
import ReservationConstants           from '../../../constants/reservationConstants';

// TODO make a parent for this and freeDays...
const NAME = 'name';
const TEL = 'tel';
const EMAIL = 'email';
const NOTE = 'note';
const CHANGE_EVENT = ReservationConstants.CHANGE_EVENT;

export default class TextForm extends React.Component {

  constructor(props) {
    super(props);
    this.getConfirmation = this.getConfirmation.bind(this);
    this.state = {};
  }

  componentWillMount() {
    ReservationStore.on(CHANGE_EVENT, this.getConfirmation);
  }

  componentWillUnmount() {
    ReservationStore.removeListener(CHANGE_EVENT, this.getConfirmation);
  }

  getConfirmation() {
    let confirmation = ReservationStore.getConfirmation();

    if(!confirmation.errors){
      this.clearFields();
    }
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
  }

  changeValue(name, value) {
    let newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  render(){
    return (
      <form class="reserv" role="form">
        <TextInput
          placeholder="Nom"
          name={NAME}
          ref={NAME}
          error={componentHelper.getError(NAME, this.props.errors)}
          value={this.state[NAME]}
          changeValue={ (name, value) => { this.changeValue(name, value); } }
        />

        <TextInput
          placeholder="Téléphone"
          name={TEL}
          ref={TEL}
          error={componentHelper.getError(TEL, this.props.errors)}
          value={this.state[TEL]}
          changeValue={ (name, value) => { this.changeValue(name, value); } }
        />

        <TextInput
          placeholder="Courriel"
          name={EMAIL}
          ref={EMAIL}
          error={componentHelper.getError(EMAIL, this.props.errors)}
          value={this.state[EMAIL]}
          changeValue={ (name, value) => { this.changeValue(name, value); } }
        />

        <TextInput
          placeholder="Note (optionnel)"
          name={NOTE}
          ref={NOTE}
          error={componentHelper.getError(NOTE, this.props.errors)}
          value={this.state[NOTE]}
          rows={2}
          changeValue={ (name, value) => { this.changeValue(name, value); } }
        />
      </form>
    );
  }
}