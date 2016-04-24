"use strict";

import React from 'react';

import CheckBoxDay from './checkBoxDay';


export default class CheckBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      '2016-04-27T17:30:00.000Z': 'false',
    };
  }

  componentDidMount() {

  }

  _getMounthYear(date){
    return 'Mai 2016';
  }

  changeValue(name, value) {
    let newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  _renderCheckBoxDay(name){
    return(
      <CheckBoxDay
        name={name}
        ref={name}
        checked={this.state[name]}
        changeValue={ (name, value) => { this.changeValue(name, value); } }
      />
    );
  }

  _renderMounth(){
    let mounthYear = this._getMounthYear();
    let myDate = this._renderCheckBoxDay('2016-04-27T17:30:00.000Z');
    return(
      <tr>
        <td className="reservation-month-name">
          <strong>{mounthYear}</strong>
        </td>
        {myDate}
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


            
