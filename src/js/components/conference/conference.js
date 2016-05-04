"use strict";

// Vendor modules
import React                          from 'react';
import Request                        from 'superagent';

// Project modules


export default class Conference extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  renderTitle(title){
    return(
      <div class="col-sm-12 text-center">
        <h4 class="text-uppercase">{title}</h4>
      </div>
    );
  }

  render(){
    let title = null;
    if(this.props.conference){
      title = this.renderTitle(this.props.conference.title)
    }
    return (
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-12 conf-container">
            {title}
          </div>
        </div>
      </div>
    );
  }
}
