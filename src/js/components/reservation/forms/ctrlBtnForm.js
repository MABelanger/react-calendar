"use strict";

import React from 'react';
import BackBtn from '../../common/backBtn';
import NextBtn from '../../common/nextBtn';



export default class CtrlBtnForm extends React.Component {

  constructor(props) {
    super(props);

  }

  cancel(e){
    e.preventDefault();
    this.props.cancel();
  }

  send(e){
    e.preventDefault();
    this.props.send()
  }

  render(){
    return(
      <div class="text-right">
        <BackBtn
          txt="Annuler"
          click={(e) => {this.cancel(e);}}
        />
        &nbsp;
        <NextBtn
          txt="Envoyer"
          click={(e) => {this.send(e);}}
        />
      </div>
    );
  }
}




