"use strict";

import React from 'react';
import LeftInfo from './leftInfo/leftInfo';
import CenterInfo from './centerInfo/centerInfo';
import RightInfo from './rightInfo/rightInfo';

export default class Calendar extends React.Component {

  constructor(props) {
    super(props);
    console.log('props', props);

  }

  componentDidMount() {

  }

  render(){
    return (
      <div className="row">
        <LeftInfo {...this.props} />
        <CenterInfo {...this.props} />
        <RightInfo {...this.props} />
      </div>
    );
  }

}
