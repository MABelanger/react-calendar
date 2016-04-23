"use strict";
import moment from 'moment';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import * as componentHelper from '../../helper';

import BackBtn from '../../common/backBtn';


export default class Price extends React.Component {

  constructor(props) {
    super(props);

  }

  render(){
    let price = null;
    let {course, teacher} = this.props;

    if(course && teacher){
      let courseDescription = teacher.course;
      price = componentHelper.renderHtml(courseDescription.price)
    }
    return(
      <div class="row">
        <div class="col-sm-12">
          <div class="form-horizontal">
            <fieldset>
              <div class="control-group">
                <span class="all-label">coût:</span>
                {price}
              </div>
            </fieldset>
          </div>
          <BackBtn txt='Retour au calendrier'/>
        </div>
      </div>
    );
  }
}