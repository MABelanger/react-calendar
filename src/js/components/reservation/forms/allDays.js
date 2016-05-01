"use strict";

// Vendor modules
import React                          from 'react';
import moment                         from 'moment';

// Project modules
import * as componentHelper           from '../../helper';
import TextForm                       from './textForm';
import CtrlBtnForm                    from './ctrlBtnForm';

// TODO make a parent for this and freeDays...
export default class OneOrManyDays extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  send(){
    let reservation = this.refs.textForm.getFields();
    this.props.send(reservation);
  }

  cancel(){
    this.props.cancel();
  }

  render(){
    return (
      <span>
        <strong>Pour:</strong> {this.props.msg}
        <TextForm
          ref="textForm"
          errors={this.props.errors}
        />
        <CtrlBtnForm
          send={ () => {this.send();} }
          cancel={ () => {this.cancel();} }
        />
      </span>
    );
  }
}