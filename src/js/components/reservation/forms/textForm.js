"use strict";

import React from 'react';

import moment from 'moment';
import * as componentHelper       from '../../helper';

// TODO make a parent for this and freeDays...


export default class TextForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }


  render(){
    return (
<form ng-show="isForm" class="reserv ng-pristine ng-valid ng-valid-email" role="form">
    <div errormsg="" save-error=""></div>
    <div class="form-group">
        <div class="text-danger ng-binding">
            
        </div>
        <input type="text" class="form-control ng-pristine ng-untouched ng-valid" id="name" placeholder="Nom"/>
    </div>
    <div class="form-group">
        <div class="text-danger ng-binding">
            
        </div>
        <input type="text" class="form-control ng-pristine ng-untouched ng-valid" id="tel" placeholder="Téléphone"/>
    </div>
    <div class="form-group">
        <div class="text-danger ng-binding">
            
        </div>
        <input type="email" class="form-control ng-pristine ng-untouched ng-valid ng-valid-email" id="email" placeholder="Courriel"/>
    </div>
    <div class="form-group">
        <textarea rows="2" class="form-control ng-pristine ng-untouched ng-valid" id="note" placeholder="Note (optionnel)"/>
    </div>



</form>
    );
  }
}


            
