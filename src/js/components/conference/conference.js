"use strict";

// Vendor modules
import React                          from 'react';
import Request                        from 'superagent';
import * as componentHelper           from '../helper';
import NextBtn                        from '../common/nextBtn';
import ConferenceConstants            from '../../constants/conferenceConstants';

import './styles.scss';

// Project modules


export default class Conference extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  _renderSchedule(schedule, index){
    let day = componentHelper.renderDateDDMMMM(schedule.dayStart);
    let {hourStart, hourEnd} = componentHelper.getHourRange(schedule);
    return(
      <div key={index}>
        {day} de&nbsp;
        <strong>{hourStart} à {hourEnd}</strong>
        <br/>
      </div>
    );
  }

  _renderSchedules(schedules){
    let Schedules = schedules.map((schedule, index)=>{
      return this._renderSchedule(schedule, index);
    });

    return Schedules;
  }

  _renderScheduleTable(schedules){
    let Schedules = this._renderSchedules(schedules);
    return(
      <table class="conf-table">
        <tbody>
          <tr>
            <td class="all-label all-label-align">
              Date(s):
            </td>
            <td>
              {Schedules}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  showMore(e, conference){
    e.preventDefault();
    const { router } = this.context;
    let link = componentHelper.getConferenceDetailLink(conference);
    router.push(link);
  }

  render(){
    let title = null;
    let imageUrl = null;
    let ScheduleTable = null;
    let abstract = null;
    let conference = this.props.conference;
    if(this.props.conference){
      title = conference.title;
      imageUrl = ConferenceConstants.URL_IMAGE + '/' + conference.image.url;
      ScheduleTable = this._renderScheduleTable(conference.schedules);
      abstract = conference.abstract;
    }
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="col-sm-12 conf-container">
            <div className="col-sm-12 text-center">
              <h4 className="text-uppercase">{title}</h4>
             </div>
            <div className="col-sm-2 text-center">
              <img className="conf-image radius-img" src={imageUrl} alt="image conference"/>
            </div>
            <div class="col-sm-10">
            </div>

            {ScheduleTable}

            <div class="conf-description">
              <span dangerouslySetInnerHTML={{__html: abstract }}></span>
            </div>

            <div class="col-sm-12 text-center">
              <NextBtn
                txt="En savoir plus"
                click={(e) => {this.showMore(e, conference);}}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
