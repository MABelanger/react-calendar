"use strict";

// Vendor modules
import moment                         from 'moment';
import React                          from 'react';
import ReactDOMServer                 from 'react-dom/server';

// Project modules
import * as componentHelper           from '../../helper';
import BackBtn                        from '../../common/backBtn';

export default class Price extends React.Component {

  constructor(props) {
    super(props);

  }

  render(){
    let price = null;
    let {course, teacher} = this.props;

    if(course && teacher){
      let courseDescription = teacher.course;
      price = courseDescription.price
    }
    return(
      <div>
        <div class="row">
          <div class="col-sm-12">
            <div class="form-horizontal">
                <div class="control-group">
                  <span class="all-label">coût:</span>
                  <span dangerouslySetInnerHTML={{__html: price }}></span>
                </div>
            </div>
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