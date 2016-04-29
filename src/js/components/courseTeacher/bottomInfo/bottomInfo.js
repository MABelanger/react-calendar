"use strict";

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import CourseDescription from './courseDescription';
import CourseTypes from './courseTypes';
import Price from './price';
import * as componentHelper from '../../helper';


export default class LeftInfo extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }




  render(){
    return(
      <div>
        <CourseDescription {...this.props} />
        <CourseTypes  />
        <Price  {...this.props} />
      </div>
    );
  }
}


