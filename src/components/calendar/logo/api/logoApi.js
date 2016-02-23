"use strict";

var LogoApi = {

  getSvg: function(logoName, logos) {
    for(var key in logos) {
      console.log('key', key)
      if(logos.hasOwnProperty(key)) {
      	console.log('JSON.parse(logos[key].svg)',logos[key].svg);
        return logos[key].svg;
      }
    }
  },
};

module.exports = LogoApi;