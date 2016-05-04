"use strict";

// Vendor modules
import React                          from 'react';
import ReactDOMServer                 from 'react-dom/server';

// Project modules
import CourseDescription              from './courseDescription';
import CourseTypes                    from './courseTypes';
import Price                          from './price';
import * as componentHelper           from '../../helper';

export default class LeftInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <CourseDescription {...this.props} />
        <CourseTypes  {...this.props} />
        <Price  {...this.props} />
      </div>
    );
  }
}