var React = require('react');
var Schedule = require('../schedule/schedule');

var CalendarPage = React.createClass({
  render: function(){
    console.log('inside', 'CalendarPage')
    return (
      <div>
        <Schedule />
      </div>
    );
  }
});

module.exports = CalendarPage;
