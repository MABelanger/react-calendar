"use strict";

var React = require('react');
var Coaching = require('./svg/coaching');
var JoyA = require('./svg/joy-a');
var KiGong = require('./svg/ki-gong');

var Logo = React.createClass({

  getLogo: function(name){
    console.log('name', name)
    switch (name) {

      case 'coaching': {
        return (
          <Coaching />
        );
      }

      case 'joy-a': {
        return (
          <JoyA />
        );
      }

      case 'ki-gong': {
        return (
          <KiGong />
        );
      }

      default: {
        return (
          <span></span>
        );
      }
    }
  },
  render: function(){
    return (
      this.getLogo(this.props.name)
    );
  }
});

module.exports = Logo;
