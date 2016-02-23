var React = require('react');
var $ = jQuery = require('jquery');
var Schedule = require('./schedule/schedule');
var CalendarApi = require('./api/calendarApi');


var Calendar = React.createClass({

  getInitialState: function() {
    console.log('getInitialState');
    return {
      schedule : {
        headers : [],
        days: []
      },
      logos: []
    };
  },

  componentDidMount: function() {
    console.log('componentDidMount');
    this.serverRequest = $.get('/api/calendar.json', function (result) {
      console.log('CalendarApi.getSchedule(result)', CalendarApi.getSchedule(result))
      this.setState({
        schedule: CalendarApi.getSchedule(result),
        logos: CalendarApi.getLogos(result)
      });

    }.bind(this));
  },

  render: function(){
    return (
      <div>
        <Schedule schedule={this.state.schedule} logos={this.state.logos} />
      </div>
    );
  }
});

module.exports = Calendar;
