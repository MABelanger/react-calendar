"use strict";

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import * as componentHelper from '../../helper';

import './styles.scss';

export default class RightInfo extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render(){
    if(this.props.courseTeacher){
      console.log('this.props', this.props);
      let course = this.props.courseTeacher.course;
      let teacher = this.props.courseTeacher.teacher;

      return (
        <div class="col-sm-4 info-pad-top-col-3">
          <div class="ng-scope">
            <div class="all-label ng-binding">Yoga:</div>
            <div class="tab ng-binding">
              Du 18 Janvier au 08 Juillet 2016
              <div class="ng-scope">
                <ul>
                  <li class="coursed-li-day-name"><span class="all-label ng-binding">Lundi</span></li>
                  <ul>
                    <li class="coursed-li-hour ng-binding">18:00 à 19:20 <a class="link-url" href="#/day_schedules/reserve/46">Réserver</a> <span class="ng-hide"><strong><u>Complet</u></strong></span><br /> <span class="txt-red"> </span></li>
                  </ul>
                </ul>
              </div>
              <div class="ng-scope">
                <ul>
                  <li class="coursed-li-day-name ng-hide"><span class="all-label ng-binding">Lundi</span></li>
                  <ul>
                    <li class="coursed-li-hour ng-binding">19:30 à 20:45 <a class="link-url" href="#/day_schedules/reserve/53">Réserver</a> <span class="ng-hide"><strong><u>Complet</u></strong></span><br /> <span class="txt-red"> </span></li>
                  </ul>
                </ul>
              </div>
              <div class="ng-scope">
                <ul>
                  <li class="coursed-li-day-name"><span class="all-label ng-binding">Jeudi</span></li>
                  <ul>
                    <li class="coursed-li-hour ng-binding">15:30 à 16:40 <a class="link-url" href="#/day_schedules/reserve/9">Réserver</a> <span class="ng-hide"><strong><u>Complet</u></strong></span><br /> <span class="txt-red"> <span class="ng-scope"> (Gratuit le <span class="ng-binding ng-scope">05 mai 2016 )<br /> </span> </span> </span></li>
                  </ul>
                </ul>
              </div>
              <div class="ng-scope">
                <ul>
                  <li class="coursed-li-day-name"><span class="all-label ng-binding">Vendredi</span></li>
                  <ul>
                    <li class="coursed-li-hour ng-binding">12:00 à 13:15 <a class="link-url" href="#/day_schedules/reserve/18">Réserver</a> <span class="ng-hide"><strong><u>Complet</u></strong></span><br /> <span class="txt-red"> <span class="ng-scope"> (Gratuit le <span class="ng-binding ng-scope">06 mai 2016 )<br /> </span> </span> </span></li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return(<div></div>);
    }
  }
}


