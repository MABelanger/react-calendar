"use strict";

// Vendor modules
import React                          from 'react';

// Project modules
import ReservationConference          from '../../components/reservation/reservationConference';
import * as helperPage                from '../helperPage';


export default class ConferenceTeacherPage extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      conference: null,
      matchSchedule: null
    };
  }

  _setStateFromProps(props){
    if(props.conferences && props.conferences.length > 0){
      const { params } = this.props;
      const { conferenceSlug, speakerSlug, dateSlug, hourStartSlug } = params;

      let matchSchedule = null;
      let conference = helperPage.getConference(props.conferences, conferenceSlug, speakerSlug);
      if(conference && conference.schedules){
        let schedules = conference.schedules;
        matchSchedule = helperPage.getMatchReservationSchedule(schedules, dateSlug, hourStartSlug);
      }
      this.setState({
        conference: conference,
        matchSchedule: matchSchedule
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    this._setStateFromProps(nextProps)
  }

  componentDidMount(){
    console.log('this.props', this.props)
    this._setStateFromProps(this.props)
  }

  // TODO put it into helper or extend from parent
  backBtnClick(e){
    e.preventDefault();
    const { router } = this.context
    router.push('/')
  }

  render(){
    return (
      <ReservationConference
        conference={this.state.conference}
        schedule={this.state.matchSchedule}
        backBtnClick={(e)=>{ this.backBtnClick(e); }}
      />
    );
  }
}
