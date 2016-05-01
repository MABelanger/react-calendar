"use strict";

// Flux CourseStore
import AppDispatcher                  from '../dispatcher/clientDispatcher';
import CourseConstants                from '../constants/courseConstants';
import { EventEmitter }               from 'events';

const CHANGE_EVENT = CourseConstants.CHANGE_EVENT;


// Define the public event listeners and getters that
// the views will use to listen for changes and retrieve
// the store
class CourseStoreClass extends EventEmitter {

  constructor() {
    super();
    this.courses = {};
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

  setCourses(courses){
    this.courses = courses;
  }

  doneReservation(reservationMessage){
    this.reservationMessage = reservationMessage;
  }

  getCourses(){
    return this.courses;
  }

}



// Initialize the singleton to register with the
// dispatcher and export for React components
const courseStore = new CourseStoreClass();

// Register each of the actions with the dispatcher
// by changing the store's data and emitting a
// change
AppDispatcher.register((payload) => {
  switch (payload.actionType) {

  case CourseConstants.RECEIVE_COURSES:

    courseStore.setCourses(payload.courses);
    courseStore.emit(CHANGE_EVENT);
    break;

  default:
    return true;
  }
});

export default courseStore;
