"use strict";

import React from 'react';
import LeftInfo from './leftInfo/leftInfo';
import CenterInfo from './centerInfo/centerInfo';
import RightInfo from './rightInfo/rightInfo';

import BottomInfo from './bottomInfo/bottomInfo';

export default class Calendar extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render(){
    return (
      <div>
        <div className="row">
          <LeftInfo {...this.props} />
          <CenterInfo {...this.props} />
          <RightInfo {...this.props} />
        </div>
        <BottomInfo {...this.props} />
      </div>
    );
  }

}
