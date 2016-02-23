"use strict";

var LogoApi = {

  getSvg: function(logoName, logos) {
  	console.log('logoName', logoName);
    for(var key in logos) {
      if(logos.hasOwnProperty(key) && logoName == key) {
        return logos[key].svg;
      }
    }
  },
};

module.exports = LogoApi;