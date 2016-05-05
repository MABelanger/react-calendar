"use strict";

// Vendor modules
import React                          from 'react';
import ReactDomServer                 from 'react-dom/server';
import moment                         from 'moment';
import toastr                         from 'toastr';

// Project modules
import * as componentHelper           from '../helper';
import BackBtn                        from '../common/backBtn';


// Vendor styles
import 'toastr/build/toastr.css';

// Project styles
import './styles.scss';


// TODO split this files
export default class Reservation extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object
  }

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render(){

  }
}