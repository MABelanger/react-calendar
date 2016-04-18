var React = require('react');
var $ = jQuery = require('jquery');
var Request = require('superagent');
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
      logos: [],
      courses : []
    };
  },

  /**
   * Read
   **/
  list: function(callback) {
    var URL = 'http://localhost:3000/api/courses';
    Request
    .get(URL, function(err, res){
      callback(res.body);
    });
  },

  componentDidMount: function() {
    this.serverRequest = this.list(function (result) {

      this.setState({
        courses: result
      });

    }.bind(this));
  },

//        <Schedule schedule={this.state.schedule} logos={this.state.logos} />
  render: function(){
    return (
      <div className="row">
        <Courses courses={this.state.courses}/>

      </div>
    );
  }
});

module.exports = Calendar;
