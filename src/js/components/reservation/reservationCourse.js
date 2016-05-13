"use strict";

// Vendor modules
import React                          from 'react';
import ReactDomServer                 from 'react-dom/server';
import moment                         from 'moment';
import toastr                         from 'toastr';

// Project modules
import * as componentHelper           from '../helper';
import Dropdown                       from '../common/dropdown/Dropdown';
import FreeDaysForm                   from './forms/freeDays';
import TryingDaysForm                 from './forms/tryingDays';
import OneOrManyDaysForm              from './forms/oneOrManyDays';
import AllDaysForm                    from './forms/allDays';
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
      currentForm: null,
      reservationHeader: "",
      tryingDaysDates: [],
      oneOrManyDaysDates: [],
      freeDaysDates: [],
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

    console.log('confirmation', confirmation)
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


  _getTitleAllDays(schedule){

    let rangeDates = null
    let weekDayName = null;
    let numberDates = null;

    if(schedule){
      rangeDates = componentHelper.renderRangeDates(schedule.dayStart, schedule.dayEnd);
      numberDates = componentHelper.getNumberDates(schedule.dayStart, schedule.dayEnd)
      weekDayName = componentHelper.getWeekDayName(schedule.dayStart);
    }

    return weekDayName + ", du " + rangeDates + " " + "(" + numberDates + " cours)";
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.schedule){
      let schedule = nextProps.schedule;

      let allDaysTitle =  componentHelper.capitalizeFirstLetter(this._getTitleAllDays(schedule));
      let freeDays = schedule.freeDays;
      let dropDownList = [];

      // show in the select only if freeDays have days.
      if (freeDays && freeDays.length >0){
        dropDownList.push(
          {title: "Un cour gratuit", form: 'FREE_DAYS'}
        );
      }

      dropDownList.push(
        {title: allDaysTitle, form: 'ALL_DAYS'},
        {title: "Une ou plusieur journee de cours", form: 'ONE_OR_MANY_DAYS'},
        {title: "Un cour d'essaie", form: 'TRYING_DAYS'}
      );

      this.setState({
        dropDownList : dropDownList
      });
    }
    if(nextProps.course){
      let {course, teacher, courseType, schedule} = nextProps;
      this.setState({
        reservationHeader : this._getReservationHeader(course, teacher, courseType, schedule)
      });
    }
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

  getName(item){
    return item.title;
  }

  getValue(){
    if(this.state.currentForm){
      return this.getName(this.state.currentForm);
    } else {
      return "Choisir une option de réservation ...";
    }
  }

  select(reservationType){
    this.setState({
      currentForm: reservationType,
      tryingDaysDates: [],
      oneOrManyDaysDates: [],
      freeDaysDates: [],
      confirmation: {},
      errors: {}
    })
  }
  
  _removeItem(arr, item){
    var index = arr.indexOf(item);
    if (index >= 0) {
      arr.splice( index, 1 );
    }
    return arr;
  }

  _changeValueDates(stateVariableName, name, value){
    let stateVariable = this.state[stateVariableName]
    name = moment(name).format('LL');

    if(value == true){
      stateVariable.push(name);
    }else {
      stateVariable = this._removeItem(stateVariable, name);
    }

    this.setState({
      stateVariable : stateVariable
    });
  }

  changeValueFreeDays(name, value) {
    this._changeValueDates('freeDaysDates', name, value);
  }

  changeValueOneOrManyDays(name, value) {
    this._changeValueDates('oneOrManyDaysDates', name, value);
  }

  changeValueTryingDays(name, value) {
    this._changeValueDates('tryingDaysDates', name, value);
  }

  // TODO put it into helper or extend from parent
  backBtnClick(){
    const { router } = this.context
    router.push('/')
  }

  cancel(){
    this.backBtnClick();
  }

  _renderReservationHeader(){
    // render the component to htmlString
    let reservationHeader = ReactDomServer.renderToStaticMarkup(this.state.reservationHeader);
    let title = this.getName(this.state.currentForm)
    reservationHeader += "<br/>";
    reservationHeader += "<b>pour: </b>" + title + "<br/>";
    return reservationHeader;
  }

  send(currentForm, reservation){
    reservation.reservationHeader = this._renderReservationHeader();
    ReservationActions.sendReservation(reservation);
  }

  _getFreeDaysForm(schedule, selectedDates){

    let freeDays = schedule.freeDays.map((freeDay, index) =>{

      // // TODO to remove whe fix the db
      // if(! freeDay.day){
      //   console.error('! freeDay', freeDay._id)
      //   return moment('2016-01-11T16:15:00.000Z');
      // }
        
      return freeDay.day;
    });

    return(
      <FreeDaysForm 
      freeDays={freeDays}
      errors={this.state.errors}
      selectedDates={selectedDates}
      msg="Un cour gratuit"
      cancel={() => { this.cancel('FREE_DAYS'); }}
      send={(reservation) => { this.send('FREE_DAYS', reservation); }}
      changeValue = {(name, value) => { this.changeValueFreeDays(name, value); }}
      />
    );
  }

  _getOneOrManyDaysForm(schedule, selectedDates){
    return(
      <OneOrManyDaysForm 
      dayStart={schedule.dayStart}
      dayEnd={schedule.dayEnd}
      errors={this.state.errors}
      selectedDates={selectedDates}
      msg=" Une ou plusieurs journée(s) de cours"
      cancel={() => { this.cancel('ONE_OR_MANY_DAYS'); }}
      send={(reservation) => { this.send('ONE_OR_MANY_DAYS', reservation); }}
      changeValue = {(name, value) => { this.changeValueOneOrManyDays(name, value); }}
      />
    );
  }

  _getTryingDaysForm(schedule, selectedDates){
    return(
      <TryingDaysForm 
      dayStart={schedule.dayStart}
      dayEnd={schedule.dayEnd}
      errors={this.state.errors}
      selectedDates={selectedDates}
      msg="Un cour d'essaie (gratuit)"
      cancel={() => { this.cancel('TRYING_DAYS'); }}
      send={(reservation) => { this.send('TRYING_DAYS', reservation); }}
      changeValue = {(name, value) => { this.changeValueTryingDays(name, value); }}
      />
    );
  }

  _getAllDaysForm(schedule){
    return(
      <AllDaysForm 
      dayStart={schedule.dayStart}
      dayEnd={schedule.dayEnd}
      errors={this.state.errors}
      msg={this.getName(this.state.currentForm)}
      cancel={() => { this.cancel('ALL_DAYS'); }}
      send={(reservation) => { this.send('ALL_DAYS', reservation); }}
      />
    );
  }


  render(){
    let {schedule} = this.props;
    let currentForm = null;

    if(this.state.currentForm){

      if(this.state.currentForm.form == 'TRYING_DAYS'){
        currentForm = this._getTryingDaysForm(schedule, this.state.tryingDaysDates);

      }else if(this.state.currentForm.form == 'ONE_OR_MANY_DAYS'){
        currentForm = this._getOneOrManyDaysForm(schedule, this.state.oneOrManyDaysDates);

      }else if(this.state.currentForm.form == 'FREE_DAYS'){
        currentForm = this._getFreeDaysForm(schedule, this.state.freeDaysDates);

      }else if(this.state.currentForm.form == 'ALL_DAYS'){
        currentForm = this._getAllDaysForm(schedule);
      }
    }

    return (
      <div>
        <div className="row">
          <div className="col-sm-offset-3 col-sm-6 col-sm-offset-3">
            <h3 className="text-center">Réservation</h3>
            <div className="reserv-cont-form">
              {this.state.reservationHeader}
              <br/>
              <br/>
              <Dropdown
                disabled={function(){}}
                list={this.state.dropDownList}
                onSelect={this.select.bind(this)}
                cbGetName={this.getName.bind(this)}
                cbGetValue={this.getValue.bind(this)}
              />
            </div>
            <br/>
            {currentForm}
          </div>
        </div>
      </div>
    );
  }
}