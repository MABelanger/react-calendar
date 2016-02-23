"use strict";

var React = require('react');
var Coaching = require('./svg/coaching')

var Logo = React.createClass({

  getLogo: function(name){

    return (
      <Coaching />
    );
        
    switch (name) {
      case 'coaching':
        return (
          <Coaching />
        );

      case 'another-icon':
        return (
          <span></span>
        );
    }
  },
  render: function(){
    return (
      this.getLogo(this.props.name)
    );
  }
});

module.exports = Logo;
