"use strict";

// Vendor modules
import Request                        from "superagent";

// Project modules
import ClientDispatcher               from "../dispatcher/clientDispatcher";
import ReservationConstants           from "../constants/reservationConstants";

export function sendReservation(reservation) {
  const URL = ReservationConstants.URL;

  Request
    .post(URL)
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