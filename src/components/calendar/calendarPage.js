var React = require('react');
var Schedule = require('./schedule/schedule');

var CalendarPage = React.createClass({
  render: function(){
    return (
      <div>
        <Schedule />
      </div>
    );
  }
});

module.exports = CalendarPage;
