"use strict";

import React from 'react';

import * as componentHelper       from '../../helper';

import './styles.scss';


export default class CheckBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '1',
    };
  }

  componentDidMount() {

  }

  render(){

    return (

        <table>
          <tbody>
            <tr class="ng-scope">
              <td class="reservation-month-name">
                <strong class="ng-binding">Mai 2016</strong>
              </td>

              <td class="text-center reservation-day">
                <label class="reservation-label" for="02 mai 2016"> 02 </label>
                <input id="02 mai 2016" class="reservation-checkbox" name="selectedDays" type="checkbox" value="02 mai 2016" />
                <label class="reservation-label" for="02 mai 2016"></label>
              </td>
            </tr>
          </tbody>
        </table>

    );
  }

}


            
