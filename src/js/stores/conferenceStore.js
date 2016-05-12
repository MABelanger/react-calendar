"use strict";

// Flux ConferenceStore
import AppDispatcher                  from '../dispatcher/clientDispatcher';
import ConferenceConstants            from '../constants/conferenceConstants';
import { EventEmitter }               from 'events';

import * as componentHelper           from '../components/helper';

const CHANGE_EVENT = ConferenceConstants.CHANGE_EVENT;


// Define the public event listeners and getters that
// the views will use to listen for changes and retrieve
// the store
class ConferenceStoreClass extends EventEmitter {

  constructor() {
    super();
    this.conferences = {};
  }

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  emitChange(){
    this.emit(CHANGE_EVENT);
  }

  setConferences(conferences){
    conferences = componentHelper.getOrderConferencesFromNow(conferences);
    this.conferences = conferences;
  }

  doneReservation(reservationMessage){
    this.reservationMessage = reservationMessage;
  }

  getConferences(){
    return this.conferences;
  }

}



// Initialize the singleton to register with the
// dispatcher and export for React components
const conferenceStore = new ConferenceStoreClass();

// Register each of the actions with the dispatcher
// by changing the store's data and emitting a
// change
AppDispatcher.register((payload) => {
  switch (payload.actionType) {

  case ConferenceConstants.RECEIVE_CONFERENCES:

    conferenceStore.setConferences(payload.conferences);
    conferenceStore.emit(CHANGE_EVENT);
    break;

  default:
    return true;
  }
});

export default conferenceStore;
