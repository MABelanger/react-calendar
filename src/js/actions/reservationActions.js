import Request                    from "superagent";

import ClientDispatcher from "../dispatcher/clientDispatcher";
import ReservationConstants from "../constants/reservationConstants";

export function sendReservation(reservation) {
  const URL = 'http://localhost:3000/api/reservations';

  Request
    .post(URL)
    .accept('application/json')
    .type('application/json')
    .send(reservation)
    .end((err, res) => {
      console.log('res.body', res.body)
      ClientDispatcher.dispatch({
        actionType: ReservationConstants.DONE_RESERVATION,
        confirmation: res.body
      });
    });
}