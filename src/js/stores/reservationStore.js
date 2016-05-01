"use strict";

// Flux CourseStore
import AppDispatcher                  from '../dispatcher/clientDispatcher';
import ReservationConstants           from '../constants/reservationConstants';
import { EventEmitter }               from 'events';

const CHANGE_EVENT = ReservationConstants.CHANGE_EVENT;

// Define the public event listeners and getters that
// the views will use to listen for changes and retrieve
// the store
class ReservationStoreClass extends EventEmitter {

  constructor() {
    super();
    this.confirmation = "";
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

  doneReservation(confirmation){
    this.confirmation = confirmation;
  }

  getConfirmation(){
    return this.confirmation;
  }
}

// Initialize the singleton to register with the
// dispatcher and export for React components
const reservationStore = new ReservationStoreClass();

// Register each of the actions with the dispatcher
// by changing the store's data and emitting a
// change
AppDispatcher.register((payload) => {
  switch (payload.actionType) {

  case ReservationConstants.DONE_RESERVATION:

    reservationStore.doneReservation(payload.confirmation);
    reservationStore.emit(CHANGE_EVENT);
    break;

  default:
    return true;
  }
});

export default reservationStore;
