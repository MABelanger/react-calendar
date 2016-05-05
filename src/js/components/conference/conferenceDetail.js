"use strict";

// Vendor modules
import React                          from 'react';
import Request                        from 'superagent';
import * as componentHelper           from '../helper';
import BackBtn                        from '../common/backBtn';

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

  _renderSchedule(schedule){
    let day = componentHelper.renderDateDDMMMM(schedule.dayStart);
    let {hourStart, hourEnd} = componentHelper.getHourRange(schedule);
    return(
      <div class="confd-day">08 juillet 2016, <strong>19:00 à 21:00</strong> <a class="link-url" href="#/day_conferences/reserve/94">Réserver</a> <span class="ng-hide"><strong><u>Complet</u></strong></span></div>
    );
    return(
      <div>{day} de <strong>{hourStart} à {hourEnd}</strong><br/></div>
    );
  }

  _renderSchedules(schedules){
    let Schedules = schedules.map((schedule)=>{
      return this._renderSchedule(schedule);
    });

    return Schedules;
  }

  _renderInfoTable(conference){
    let schedules = conference.schedules;
    let Schedules = this._renderSchedules(schedules);
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
          <tr class="ng-hide">
            <td class="all-label all-label-align">Note:</td>
            <td>
              <span dangerouslySetInnerHTML={{__html: note }}></span>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  showMore(e, conference){
    e.preventDefault();
    const { router } = this.context;
    let link = componentHelper.getConferenceLink(conference);
    router.push(link);
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
      imageUrl = 'http://localhost:3000/' + conference.image.url;
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
                click={(e) => {this.showMore(e, conference);}}
              />
            </div>
          </div>
          <div class="col-sm-1"> </div>
        </div>
      </div>
    );
  }
}
