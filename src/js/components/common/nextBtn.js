"use strict";

import React from 'react';
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




