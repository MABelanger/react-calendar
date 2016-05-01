"use strict";

// Vendor modules
import React                          from 'react';

// Project modules
import * as componentHelper           from '../../helper';

// Project styles
import './styles.scss';

export default class CheckBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '1',
    };
  }

  render(){
    return (
      <td class="text-center reservation-day">
        <label class="reservation-label" for="02 mai 2016"> 02 </label>
        <input id="02 mai 2016" class="reservation-checkbox" name="selectedDays" type="checkbox" value="02 mai 2016" />
        <label class="reservation-label" for="02 mai 2016"></label>
      </td>
    );
  }
}