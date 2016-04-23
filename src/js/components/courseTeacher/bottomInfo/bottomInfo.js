"use strict";

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import CourseDescription from './courseDescription';
import * as componentHelper from '../../helper';


export default class LeftInfo extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render(){
    return(
      <CourseDescription {...this.props} />
    );
  }
}


