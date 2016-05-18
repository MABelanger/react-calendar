"use strict";

// Vendor modules
import React                          from 'react';
import _                              from 'lodash'

// Project modules
import ConferenceDetailComponent      from '../../components/conference/conferenceDetail';
import * as helperPage                from '../helperPage';

export default class ConferenceDetailPage extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object
  }


  constructor(props, context) {
    super(props, context);
    this.state = {
      conference: null
    };
  }



  _setStateFromProps(props){
    if(props.conferences && props.conferences.length > 0){
      const { params } = this.props;
      const { conferenceSlug, speakerSlug } = params;

      let conference = helperPage.getConference(props.conferences, conferenceSlug, speakerSlug);

      this.setState({
        conference: conference
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    this._setStateFromProps(nextProps)
  }

  componentDidMount(){
    this._setStateFromProps(this.props)
  }

  // TODO put it into helper or extend from parent
  backBtnClick(e){
    e.preventDefault();
    const { router } = this.context
    router.push('/')
  }

  render(){

    return (
      <ConferenceDetailComponent
        conference={this.state.conference}
      />
    );
  }
}