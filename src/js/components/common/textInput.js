"use strict";

// Vendor module
import React                          from "react";

export default class TextInput extends React.Component {
  // require propTypes
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    changeValue: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string,
    error: React.PropTypes.string
  };

  handleChange(e) {
    const value = e.target.value;
    this.props.changeValue(this.props.name, value);
  }

  _getInput(props){

    if(props.rows){
      let rows = this.props.rows;
      return(
        <textarea 
          rows={rows}
          name={props.name}
          className="form-control"
          placeholder={props.placeholder}
          ref={props.name}
          value={props.value}
          onChange={this.handleChange.bind(this)}
        />
      );
    } else {
      return(
        <input type="text"
          name={props.name}
          className="form-control"
          placeholder={props.placeholder}
          ref={props.name}
          value={props.value}
          onChange={this.handleChange.bind(this)}
        />
      );
    }
  }

  render() {
    var wrapperClass = 'form-group no-margin';
    
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += " " + 'has-error';
    }

    return (
      <div className={wrapperClass}>
        <div className="input">{this.props.error}</div>
        {this._getInput(this.props)}
      </div>
    );
  }
}