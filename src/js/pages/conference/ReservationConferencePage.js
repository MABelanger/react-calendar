"use strict";

// Vendor modules
import React                          from 'react';
import _                              from 'lodash'

// Flux ConferenceStore
import ConferenceStore                from '../../stores/conferenceStore';
import * as ConferenceActions         from '../../actions/conferenceActions';
import ConferenceConstants            from '../../constants/conferenceConstants';

// Project modules
import ReservationConference          from '../../components/reservation/reservationConference';
import * as helperPage                from '../helperPage';

const CHANGE_EVENT = ConferenceConstants.CHANGE_EVENT;

export default class ConferenceTeacherPage extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object
  }

  constructor(props, context) {
    super(props, context);
    this.getConferences = this.getConferences.bind(this);
    this.state = {
      conferences: {},
      confirmation: {}
    };
    // get the conferences from server.
    ConferenceActions.getConferences();
  }

  componentWillMount() {
    ConferenceStore.on(CHANGE_EVENT, this.getConferences);
  }

  componentWillUnmount() {
    ConferenceStore.removeListener(CHANGE_EVENT, this.getConferences);
  }

  getConferences() {
    this.setState({
      conferences: ConferenceStore.getConferences()
    });
  }

  // TODO put it into helper or extend from parent
  backBtnClick(e){
    e.preventDefault();
    const { router } = this.context
    router.push('/')
  }

  render(){
    const { params } = this.props;
    const { conferenceSlug, speakerSlug, dateSlug, hourStartSlug } = params;

    let matchSchedule = null;
    let conference = helperPage.getConference(this.state.conferences, conferenceSlug, speakerSlug);
    if(conference && conference.schedules){
      let schedules = conference.schedules;
      matchSchedule = helperPage.getMatchReservationSchedule(schedules, dateSlug, hourStartSlug);
    }

    return (
      <ReservationConference
        conference={conference}
        schedule={matchSchedule}
        backBtnClick={(e)=>{ this.backBtnClick(e); }}
      />
    );
  }
}