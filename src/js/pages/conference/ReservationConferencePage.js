"use strict";

// Vendor modules
import React                          from 'react';
import _                              from 'lodash'

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

  componentWillReceiveProps(nextProps) {
    if(nextProps.conferences && nextProps.conferences.length > 0){
      const { params } = this.props;
      const { conferenceSlug, speakerSlug, dateSlug, hourStartSlug } = params;

      let matchSchedule = null;
      let conference = helperPage.getConference(nextProps.conferences, conferenceSlug, speakerSlug);
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