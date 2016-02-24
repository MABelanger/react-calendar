var React = require('react');
var Calendar = require('./calendar');




var CalendarPage = React.createClass({
  render: function(){
    return (
      <div className="container" style={{backgroundColor:"#F5F5F5"}}>
        <Calendar />
      </div>
    );
  }
});

module.exports = CalendarPage;
