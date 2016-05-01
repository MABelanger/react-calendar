"use strict";

// Vendor modules
import React from 'react';

// Project modules
import Btn from './btn';

export default class BackBtn extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Btn {...this.props} direction="next"/>
    );
  }
}