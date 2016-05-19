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
      scheduleDays: null,
      headers: null,
      scheduleDay: null
    }
  }

  _setStateFromProps(props){
    if(props.courses && props.courses.length > 0 ){
      let scheduleDays = scheduleApi.getScheduleDays(props.courses);
      let headers = scheduleApi.getHeaders(scheduleDays).map(this.eachHeader);
      let scheduleDay = scheduleDays.map(this.eachDay.bind(this));

      this.setState({
        scheduleDays: scheduleDays,
        headers: headers,
        scheduleDay: scheduleDay
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    this._setStateFromProps(nextProps)
  }

  componentDidMount(){
    this._setStateFromProps(this.props)
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
    console.log('this.nbLoop', this.nbLoop)
    console.log('numberOfSchedules', numberOfSchedules)
    if(this.nbLoop == numberOfSchedules){
      this.nbLoop = 0;
      // force reRender this schedule
      this.setState({
        key: Date()
      });
    }
  }

  render(){
    return (
      <div 
        className="schedule col-sm-9"
        key={this.state.key}
      >
        <table className="cal">
          <thead>
            <tr className="cal">
              { this.state.headers }
            </tr>
          </thead>
          <tbody>
            <tr className="cal">
              { this.state.scheduleDay }
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}