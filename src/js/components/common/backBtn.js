"use strict";

import React from 'react';
import ReactDOMServer from 'react-dom/server';


export default class LeftInfo extends React.Component {

  constructor(props) {
    super(props);

  }

  render(){
    let {txt, url} = this.props; 
    return (
      <div className="text-center">
        <a href={url} className="btn my-btn"> &lt; {txt}</a>
      </div>
    );
  }
}




