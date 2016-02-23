var React = require('react');
var $ = jQuery = require('jquery');
var Schedule = require('./schedule/schedule');
var ScheduleApi = require('./schedule/api/scheduleApi')


var Calendar = React.createClass({

  getInitialState: function() {
    return {
      headers : [],
      days : []
    }
  },

  getSchedule: function(result) {
    return result.schedule;
  },

  componentDidMount: function() {
    this.serverRequest = $.get('/api/calendar.json', function (result) {
      var schedule = this.getSchedule(result);
      console.log('ScheduleApi.getHeaders(schedule)', ScheduleApi.getHeaders(schedule))
      this.setState({
        headers: ScheduleApi.getHeaders(schedule),
        days: ScheduleApi.getDays(schedule)
      });
    }.bind(this));
  },

  render: function(){
    return (
      <div >
        <Schedule headers={this.state.headers} days={this.state.days}/>
      </div>
    );
  }
});

module.exports = Calendar;
