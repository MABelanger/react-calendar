"use strict";

// Vendor modules
import React                          from 'react';
import {Link}                         from 'react-router';
import Request                        from 'superagent';
import * as componentHelper           from '../helper';
import BackBtn                        from '../common/backBtn';

import Reserve                        from '../common/reserve';
import Hours                          from '../common/hours';
import ConferenceConstants            from '../../constants/conferenceConstants';

import './styles.scss';

// Project modules


export default class ConferenceDetail extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  _renderIsFull(isFull){
    let Full = null;
    if(isFull){
      Full = <span><strong><u>Complet</u></strong></span>;
    }
    return Full;

  }
  _renderSchedule(conference, schedule, index){
    let day = componentHelper.renderDateDDMMMM(schedule.dayStart);
    let link = componentHelper.getConferenceReservationLink(conference, schedule);
    return(
      <div 
        key={index}
        class="confd-day"
      >
        {day},
        <Hours schedule={schedule} />&nbsp;
        <Reserve
          schedule={schedule}
          url={link}
        />
      </div>
    );
  }

  _renderSchedules(conference, schedules){
    let Schedules = schedules.map((schedule, index)=>{
      return this._renderSchedule(conference, schedule, index);
    });

    return Schedules;
  }

  _renderInfoTable(conference){
    let schedules = conference.schedules;
    let Schedules = this._renderSchedules(conference, schedules);
    let fullName = componentHelper.getFullName(conference.speaker);
    let tel = conference.tel;
    let schoolName = conference.schoolName;
    let schoolUrl = conference.schoolUrl;
    let price = conference.price;
    let note = conference.note;
    return(
      <table>
        <tbody>
          <tr>
            <td class="all-label all-label-align ">Durée:</td>
            <td>2:00h</td>
          </tr>
          <tr>
            <td class="all-label all-label-align">Avec:</td>
            <td>{fullName}</td>
          </tr>
          <tr class="">
            <td class="all-label all-label-align">Tel:</td>
            <td>{tel}</td>
          </tr>
          <tr class="">
            <td class="all-label all-label-align">Lien:</td>
            <td><a class="link-url" href={schoolUrl} target="_blank">{schoolName}</a></td>
          </tr>
          <tr>
            <td class="all-label all-label-align">Date:</td>
            <td>
              {Schedules}
            </td>
          </tr>
          <tr>
            <td class="all-label all-label-align">Coût:</td>
            <td>
              <span dangerouslySetInnerHTML={{__html: price }}></span>
            </td>
          </tr>
          <tr>
            <td class="all-label all-label-align">Note:</td>
            <td>
              <span dangerouslySetInnerHTML={{__html: note }}></span>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  backConferences(e){
    e.preventDefault();
    const { router } = this.context;
    router.push('/conferences');
  }

  render(){
    let title = null;
    let imageUrl = null;
    let ScheduleTable = null;
    let abstract = null;
    let description = null;
    let conference = this.props.conference;
    if(this.props.conference){
      title = conference.title;
      imageUrl = ConferenceConstants.URL_IMAGE + '/' + conference.image.url;
      ScheduleTable = this._renderInfoTable(conference);
      abstract = conference.abstract;
      description = conference.description;
    }
    return (
      <div className="row">
        <div class="row conf-top-container">
          <div class="col-sm-2"></div>
          <div class="col-sm-8 text-center">
            <h4 class="text-center text-uppercase">{title}</h4>
            <img class="confd-image radius-img" src={imageUrl} alt="" />
          </div>
          <div class="col-sm-2"> </div>
        </div>

        <div class="row marg-bottom">
          <div class="col-sm-1"></div>
          <div class="col-sm-10">
            <div class="conf-description-detail marg-bottom">
              <span dangerouslySetInnerHTML={{__html: description }}></span>
            </div>
              {ScheduleTable}
            <br />
            <div className="text-center">
              <BackBtn
                txt="Retour Conférence et Ateliers"
                click={(e) => {this.backConferences(e);}}
              />
            </div>
          </div>
          <div class="col-sm-1"> </div>
        </div>
      </div>
    );
  }
}
