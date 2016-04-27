"use strict";

import React from 'react';

import moment from 'moment';
import * as componentHelper       from '../../helper';
import TextInput                  from '../../common/textInput';

// TODO make a parent for this and freeDays...


export default class TextForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }


  changeValue(name, value) {
    let newState = {};
    newState[name] = value;
    this.setState(newState);
    console.log('this.state', this.state)
  }

  render(){
    //sectionHelper.getError("tel", this.props.errors)
    const NAME = 'NAME';
    const TEL = 'TEL';
    const EMAIL = 'EMAIL';
    const NOTE = 'NOTE';
    return (
      <form class="reserv" role="form">
        
        <TextInput
          placeholder="Nom"
          name={NAME}
          ref={NAME}
          error=""
          value={this.state[NAME]}
          changeValue={ (name, value) => { this.changeValue(name, value); } }
        />

        <TextInput
          placeholder="Téléphone"
          name={TEL}
          ref={TEL}
          error=""
          value={this.state[TEL]}
          changeValue={ (name, value) => { this.changeValue(name, value); } }
        />

        <TextInput
          placeholder="Courriel"
          name={EMAIL}
          ref={EMAIL}
          error=""
          value={this.state[EMAIL]}
          changeValue={ (name, value) => { this.changeValue(name, value); } }
        />

        <TextInput
          placeholder="Note (optionnel)"
          name={NOTE}
          ref={NOTE}
          error=""
          value={this.state[NOTE]}
          rows={2}
          changeValue={ (name, value) => { this.changeValue(name, value); } }
        />

      </form>
    );
  }
}


            
