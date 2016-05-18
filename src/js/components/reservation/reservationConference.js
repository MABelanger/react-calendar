"use strict";

// Vendor modules
import React                          from 'react';
import ReactDomServer                 from 'react-dom/server';
import moment                         from 'moment';
import toastr                         from 'toastr';

// Project modules
import * as componentHelper           from '../helper';

import TextForm                       from './forms/textForm';
import SuccessMessage                 from './forms/success';
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
      errors: {},
      isSuccess: false
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
        errors: confirmation.errors,
        isSuccess: false
      });

    } else {
      this.setState({
        confirmation: confirmation,
        isSuccess: true,
        tryingDaysDates: [],
        oneOrManyDaysDates: [],
        freeDaysDates: [],
        errors: {}
      });
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
    moment.locale('fr'); 
    let fullName = componentHelper.getFullName(conference.speaker);
    let day = moment( schedule.dayStart ).utcOffset("+00:00").format("LL");
    let {hourStart, hourEnd} = componentHelper.getHourRange(schedule);

    return(
      <span>
        Demande de réservation pour atelier/conférence:&nbsp;
        <strong>{conference.title}</strong>&nbsp;
        avec&nbsp;
        <strong>{fullName}</strong>&nbsp;
        le {day} de {hourStart} à {hourEnd}. 
      </span>
    )

  }

  send(conference, schedule){
    let reservation = this.refs.textForm.getFields();
    let reservationHeader = ReactDomServer.renderToStaticMarkup(
        this._renderReservationHeader(conference, schedule)
    );
    reservation.reservationHeader = reservationHeader + "<br/><br/>";
    ReservationActions.sendReservation(reservation);
  }


  cancel(){
    const { router } = this.context
    router.push('/conferences')
  }

  _renderForm(){
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
              errors={this.state.errors}
            />
            <CtrlBtnForm
              send={ () => {this.send(conference, schedule);} }
              cancel={ () => {this.cancel();} }
            />
          </div>
        </div>
      </div>
    );
  }

  render(){
    if(this.state.isSuccess){
      return <SuccessMessage 
        messageHtml={this.state.confirmation.messageHtml}
        backBtnClick={this.backBtnClick.bind(this)}
      />
    }
    else {
      return this._renderForm();
    }
  }
}