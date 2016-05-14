"use strict";

// Vendor modules
import Request                        from "superagent";

// Project modules
import ClientDispatcher               from "../dispatcher/clientDispatcher";
import ReservationConstants           from "../constants/reservationConstants";

export function sendReservation(reservation) {
  const URL_API = ReservationConstants.URL_API;

  Request
    .post(URL_API)
    .accept('application/json')
    .type('application/json')
    .send(reservation)
    .end((err, res) => {
      ClientDispatcher.dispatch({
        actionType: ReservationConstants.DONE_RESERVATION,
        confirmation: res.body
      });
    });
}