"use strict";

// Vendor modules
import React                          from 'react';
import ReactDomServer                 from 'react-dom/server';
import moment                         from 'moment';
import toastr                         from 'toastr';

// Project modules
import * as componentHelper           from '../helper';

import TextForm                       from './forms/textForm';
import CtrlBtnForm                    from './forms/ctrlBtnForm';

import BackBtn                        from '../common/backBtn';

// Flux Reservation
import ReservationStore               from '../../stores/reservationStore';
import * as ReservationActions        from '../../actions/reservationActions';
import ReservationConstants           from '../../constants/reservationConstants';

// Vendor styles
import 'toastr/build/toastr.css';

// Project styles
import './styles.scss';

const CHANGE_EVENT = ReservationConstants.CHANGE_EVENT;


// TODO split this files
export default class Reservation extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object
  }

  constructor(props) {
    super(props);
    this.getConfirmation = this.getConfirmation.bind(this);
    this.state = {
      reservationHeader: "",
      confirmation: {},
      errors: {}
    };
  }

  componentWillMount() {
    ReservationStore.on(CHANGE_EVENT, this.getConfirmation);
  }

  componentWillUnmount() {
    ReservationStore.removeListener(CHANGE_EVENT, this.getConfirmation);
  }

  getConfirmation() {
    let confirmation = ReservationStore.getConfirmation();

    if(confirmation.errors){
      this.setState({
        confirmation: {},
        errors: confirmation.errors
      });

    } else {
      this.setState({
        confirmation: confirmation.status,
        tryingDaysDates: [],
        oneOrManyDaysDates: [],
        freeDaysDates: [],
        confirmation: {},
        errors: {}
      });
      toastr.success("Votre message à été envoyé avec succes");
    }
  }



  componentWillReceiveProps(nextProps) {

    // if(nextProps.course){
    //   let {course, teacher, courseType, schedule} = nextProps;
    //   this.setState({
    //     reservationHeader : this._getReservationHeader(course, teacher, courseType, schedule)
    //   });
    // }
  }

  _getReservationHeader(course, teacher, courseType, schedule){

    let courseName = null;
    let courseTypeName = null;
    let fullName = null;
    let {hourStart, hourEnd} = componentHelper.getHourRange(schedule);
    let weekDayName = null;

    if(course && teacher && courseType && schedule){
      courseName = course.name;
      courseTypeName = courseType.name;
      fullName = componentHelper.getFullName(teacher)
      weekDayName = componentHelper.getWeekDayName(schedule.dayStart);
    }

    return(
      <span>
        Demande de réservation pour cours <strong>{courseName}, {courseTypeName} </strong>
        avec {fullName} le {weekDayName} de {hourStart} à {hourEnd}.
      </span>
    );
  }



  select(reservationType){
    this.setState({
      confirmation: {},
      errors: {}
    })
  }
  



  // TODO put it into helper or extend from parent
  backBtnClick(){
    const { router } = this.context
    router.push('/')
  }

  cancel(){
    this.backBtnClick();
  }

  _renderReservationHeader(conference, schedule){
    let fullName = componentHelper.getFullName(conference.speaker);
    let {hourStart, hourEnd} = componentHelper.getHourRange(schedule);

    return(
      <span>
        Demande de réservation pour atelier/conférence:&nbsp;
        <strong>{conference.title}</strong>&nbsp;
        avec&nbsp;
        <strong>{fullName}</strong>&nbsp;
        12 novembre 2016 de {hourStart} à {hourEnd}. 
      </span>
    )

  }

  send(currentForm, reservation){
    reservation.reservationHeader = this._renderReservationHeader();
    ReservationActions.sendReservation(reservation);
  }





  send(){
    let reservation = this.refs.textForm.getFields();
    reservation.selectedDates = this.props.selectedDates;
    this.props.send(reservation);
  }

  cancel(){
    this.props.cancel();
  }


  render(){
    let {conference, schedule} = this.props;
    let reservationHeader = null;

    if(conference && schedule){
      reservationHeader = this._renderReservationHeader(conference, schedule)
    }


    return (
      <div>
        <div className="row">
          <div className="col-sm-offset-3 col-sm-6 col-sm-offset-3">
            <h3 className="text-center">Réservation</h3>
            <div className="reserv-cont-form">
              {reservationHeader}
            </div>
            <br/>
            <TextForm 
              ref="textForm"
              errors={this.props.errors}
            />
            <CtrlBtnForm
              send={ () => {this.send();} }
              cancel={ () => {this.cancel();} }
            />
          </div>
        </div>
      </div>
    );
  }
}