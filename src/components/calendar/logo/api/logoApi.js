"use strict";

var LogoApi = {

  getSvg: function(logoName, logos) {
    for(var key in logos) {
      if(logos.hasOwnProperty(key)) {
        return logos[key].svg;
      }
    }
  },
};

module.exports = LogoApi;