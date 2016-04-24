"use strict";

import React from 'react';

import CheckBoxDay from './checkBoxDay';


export default class CheckBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '1',
    };
  }

  componentDidMount() {

  }

  _renderMounth(){
    return(
      <tr>
        <td class="reservation-month-name">
          <strong>Mai 2016</strong>
        </td>
        <CheckBoxDay date='01'/>
        <CheckBoxDay date='02'/>
      </tr>
    );
  }
  render(){

    return (
        <table>
          <tbody>
            {this._renderMounth()}
          </tbody>
        </table>
    );
  }

}


            
