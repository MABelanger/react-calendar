var React = require('react');
var Calendar = require('./calendar');

var CalendarPage = React.createClass({
  render: function(){
    return (
      <div className="container">
        <Calendar />
      </div>
    );
  }
});

module.exports = CalendarPage;
