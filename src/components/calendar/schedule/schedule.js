var React = require('react');
var $ = jQuery = require('jquery');

var Day = require('./day/day');


var Schedule = React.createClass({

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
      <div className="schedule" >
        <table className="cal">
          <tr className="cal">
            {this.props.headers.map(this.eachHeader)}
          </tr>
          <tr className="cal">
            {this.props.days.map(this.eachDay)}
          </tr>
        </table>
      </div>
    );
  }
});

module.exports = Schedule;
