"use strict";

// Vendor modules
import React                          from 'react';
import moment                         from 'moment';

// Project modules
import * as componentHelper           from '../../helper';
import CheckBoxDates                  from './checkBoxDates/checkBoxDates';
import TextForm                       from './textForm';
import CtrlBtnForm                    from './ctrlBtnForm';

export default class TryingDays extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checkBoxDatesKey: 1
    }
  }

  componentWillReceiveProps(nextProps) {
    // force to reset the CheckBoxDates if the props of selectedDates is empty
    // so that can unckeck the selected checkBox with the default value of uncheck.
    if(nextProps.selectedDates && nextProps.selectedDates.length == 0){
      let newKey = this.state.checkBoxDatesKey + 1;
      this.setState({
        checkBoxDatesKey: newKey
      });
    }
  }

  send(){
    let reservation = this.refs.textForm.getFields();
    reservation.selectedDates = this.props.selectedDates;
    this.props.send(reservation);
  }

  cancel(){
    this.props.cancel();
  }

  _getSelectedList(selectedDates){
    let SelectedDates = selectedDates.map((selectedDate, index) =>{
      return(<li key={index}>{selectedDate}</li>);
    });
    return SelectedDates;
  }

  render(){
    return (
      <span>
        <CheckBoxDates
          key={this.state.checkBoxDatesKey}
          error={componentHelper.getError('selectedDates', this.props.errors)}
          {...this.props}
        />
        <strong>Pour:</strong> {this.props.msg}
        <ul>
          {this._getSelectedList(this.props.selectedDates)}
        </ul>
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