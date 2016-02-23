"use strict";

var React = require('react');
var LogoApi = require('./api/logoApi')

var Logo = React.createClass({
  render: function(){
  	console.log('LogoApi.getSvg(this.props.name, this.props.logos)', LogoApi.getSvg(this.props.name, this.props.logos))
    return (
		<span dangerouslySetInnerHTML={{__html: LogoApi.getSvg(this.props.name, this.props.logos)}} />
    );
  }
});

module.exports = Logo;
