var React = require('react');
var $ = jQuery = require('jquery');

var Day = require('./day/day');

var ScheduleApi = require('./api/scheduleApi');



var Schedule = React.createClass({

  eachDay: function(day, i) {
    var courses = day
    return (
      <Day 
        courses={courses}
        logos={this.props.logos}
      />
    );
  },

  eachHeader: function(header, i) {
    return (
      <th className="cal day-name">{header}</th>
    );
  },

  getHeaders: function(schedule){
    return ScheduleApi.getHeaders(schedule);
  },

  getDays: function(schedule){
    return ScheduleApi.getDays(schedule);
  },

  render: function(){
    console.log('this.props.schedule', this.props.schedule)
    return (
      <div className="schedule" >
        <table className="cal">
          <tr className="cal">
            {this.getHeaders(this.props.schedule).map(this.eachHeader)}
          </tr>
          <tr className="cal">
            {this.getDays(this.props.schedule).map(this.eachDay)}
          </tr>
        </table>
      </div>
    );
  }
});

module.exports = Schedule;
