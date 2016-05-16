"use strict";

// Vendor modules
import React                          from 'react';

// Project modules
import * as componentHelper           from '../../helper';

import BackBtn                        from '../../common/backBtn';


// TODO make a parent for this and freeDays...
export default class OneOrManyDays extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render(){
    return (
      <div>
        <div className="row">
          <div className="col-sm-offset-3 col-sm-6 col-sm-offset-3">
            <h3 className="text-center">Votre message a ete envoyé avec succes !</h3>
              <span dangerouslySetInnerHTML={{__html: this.props.messageHtml }}></span>
          </div>
        </div>
        <div className="row">
          <div class="col-sm-12 text-center">
            <BackBtn
              txt='Retour au calendrier'
              click={this.props.backBtnClick}
            />
          </div>
        </div>
      </div>
    );
  }
}