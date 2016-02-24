var React = require('react');
var $ = jQuery = require('jquery');
var Schedule = require('./schedule/schedule');
var CalendarApi = require('./api/calendarApi');

var Courses = require('./courses/courses');


var Calendar = React.createClass({

  getInitialState: function() {
    return {
      schedule : {
        headers : [],
        days: []
      },
      logos: []
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get('/api/calendar.json', function (result) {
      this.setState({
        schedule: CalendarApi.getSchedule(result),
        logos: CalendarApi.getLogos(result)
      });

    }.bind(this));
  },

  render: function(){
    return (
      <div className="row">
        <Courses />
        <Schedule schedule={this.state.schedule} logos={this.state.logos} />
      </div>
    );
  }
});

module.exports = Calendar;
