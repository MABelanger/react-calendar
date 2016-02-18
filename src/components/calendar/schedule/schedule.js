var React = require('react');
var $ = jQuery = require('jquery');

var Day = require('./day/day');
var ScheduleApi = require('./api/scheduleApi');


var Schedule = React.createClass({

  getInitialState: function() {
    var schedule = ScheduleApi.getScheduleMock();
    return {
      headers: ScheduleApi.getHeaders(schedule),
      days: ScheduleApi.getDays(schedule)
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get('/api/schedule.json', function (result) {
      this.setState({
        headers: ScheduleApi.getHeaders(result),
        days: ScheduleApi.getDays(result)
      });
    }.bind(this));
  },

  eachDay: function(day, i) {
    var courses = day
    return (
      <Day 
        courses={courses}
      />
    );
  },

  eachHeader: function(header, i) {
    return (
      <th className="cal day-name">{header}</th>
    );
  },

  render: function(){
    return (
      <div>
        <table className="cal">
          <tr className="cal">
            {this.state.headers.map(this.eachHeader)}
          </tr>
          <tr className="cal">
            {this.state.days.map(this.eachDay)}
          </tr>
        </table>
      </div>
    );
  }
});

module.exports = Schedule;
