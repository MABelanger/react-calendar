"use strict";

// Vendor modules
import React                          from 'react';
import ReactDOMServer                 from 'react-dom/server';

export default class Btn extends React.Component {

  constructor(props) {
    super(props);
  }

  _getContent(direction, txt){
    if(direction == "back"){
      return(
        <span>&lt; {txt}</span>
      )
    }else if(direction == "next"){
      return(
        <span>{txt} &gt;</span>
      )
    }
  }

  render(){
    let {txt, url, direction} = this.props;
    let content = this._getContent(direction, txt);
    return (
      <span className="text-center">
        <a
          href={url}
          className="btn my-btn"
          onClick={this.props.click}
        >{content}</a>
      </span>
    );
  }
}