"use strict";

import React from 'react';
import BackBtn from '../../common/backBtn';
import NextBtn from '../../common/nextBtn';



export default class CtrlBtnForm extends React.Component {

  constructor(props) {
    super(props);

  }

  render(){
    return(
      <div class="text-right">
        <BackBtn
          txt="Annuler"
        />
        &nbsp;
        <NextBtn
          txt="Envoyer"
        />
      </div>
    );
  }
}




