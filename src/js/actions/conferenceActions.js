"use strict";

// Vendor modules
import Request                        from "superagent";

// Project modules
import ClientDispatcher               from "../dispatcher/clientDispatcher";
import ConferenceConstants            from "../constants/conferenceConstants";


export function getConferences() {
  const URL_API = ConferenceConstants.URL_API;

  Request
  .get(URL_API, function(err, res){
    ClientDispatcher.dispatch({
      actionType: ConferenceConstants.RECEIVE_CONFERENCES,
      conferences: res.body
    });
  });
}