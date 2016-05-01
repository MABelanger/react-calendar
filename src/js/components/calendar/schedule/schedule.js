"use strict";

/* Setting The State Based On Rendered DOM Elements In ReactJS 
 * bennadel.com/blog/2915-setting-the-state-based-on-rendered-dom-elements-in-reactjs.htm
 */

// Vendor modules
import React                          from 'react';

// Project modules
import Day                            from './day/day';
import * as scheduleApi               from './api/scheduleApi';

// Project styles
import './styles.scss';

export default class Schedule extends React.Component {

  constructor(props) {
    super(props);
    this.maxHeight=0;
    this.nbLoop=0;

    this.state = {
      scheduleDays: []
    }
  }


  componentWillReceiveProps(nextProps) {
    if(nextProps.courses != this.props.courses){
      this.setState({
        scheduleDays: scheduleApi.getScheduleDays(nextProps.courses),
        key: Date()
      });
    }
  }

  eachDay(day, i) {
    var courses = day;
    return (
      <Day
        courseHeight={this.maxHeight}
        setMaxHeight={this.setMaxHeight.bind(this)}
        key={i}
        courses={courses}
      />
    );
  }

  eachHeader(header, i) {
    return (
      <th key={i} className="cal day-name">{header}</th>
    );
  }

  /*
   * setMaxHeight is called each time that /day/course/course.js is rendered
   * and we track the number of render by increment the nbLoop
   * after that we compare nbLoop with the number of child of
   * schedule.
   */
  setMaxHeight(height){
    // the nbLoop correspond of the number of render of a
    this.nbLoop++;
    let numberOfSchedules = scheduleApi.getNbSchedule(this.state.scheduleDays);

    // Set the new maxHeight
    if(this.maxHeight < height){
      this.maxHeight = height + 10;
    }

    // Only if it is the last schedule, force rerender by calling setState
    // with the right height.
    if(this.nbLoop == numberOfSchedules){
      this.setState({
        key: Date()
      });
    }
  }

  render(){
    let headers = scheduleApi.getHeaders(this.state.scheduleDays).map(this.eachHeader);
    let scheduleDay = this.state.scheduleDays.map(this.eachDay.bind(this));

    return (
      <div 
        className="schedule col-sm-9"
        key={this.state.key}
      >
        <table className="cal">
          <thead>
            <tr className="cal">
              { headers }
            </tr>
          </thead>
          <tbody>
            <tr className="cal">
              { scheduleDay }
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}