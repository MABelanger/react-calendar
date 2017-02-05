"use strict";

// Vendor modules
import React                          from 'react';

// Project modules
import ConferencesComponent            from '../../components/conference/conferences';
import * as helperPage                from '../helperPage';

export default class ReservationPage extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object
  }

  // TODO put it into helper or extend from parent
  backBtnClick(e){
    e.preventDefault();
    const { router } = this.context
    router.push('/')
  }

  render(){
    return (
      <ConferencesComponent
        conferences={this.props.conferences}
      />
    );
  }
}
