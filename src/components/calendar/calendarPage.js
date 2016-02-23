var React = require('react');
var Calendar = require('./calendar');

var CalendarPage = React.createClass({
  render: function(){
    return (
      <div>
        <Calendar />
      </div>
    );
  }
});

module.exports = CalendarPage;
