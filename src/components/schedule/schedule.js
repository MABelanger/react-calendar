var React = require('react');
var Day = require('../day/day');

var ScheduleApi = require('../api/scheduleApi');


var Schedule = React.createClass({


  getInitialState: function() {
    var schedule = ScheduleApi.getSchedule();
    console.log(ScheduleApi.isDinnerTime(schedule));
    return {
      headers: ScheduleApi.getHeaders(schedule),
      days: ScheduleApi.getDays(schedule)
    };
  },

  componentDidMount: function() {

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
    console.log('inside', 'Row', this.state.days)
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
