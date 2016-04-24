"use strict";

import React from 'react';

import * as componentHelper       from '../../helper'; 
import Dropdown                   from '../../common/dropdown/Dropdown';
import './styles.scss';


export default class Reservation extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }
/*
      <div class="dropdown">
        <br />
        <a class="btn my-btn dropdown-toggle" type="button" id="dropdownMenu1" aria-expanded="true"> 
            <span>Un Cours Gratuit</span>

            <span class="caret"></span>
        </a>
        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
            <li role="presentation">
                <a role="menuitem" href="">
                    <span>Un Cours Gratuit</span>
                </a>
            </li><li role="presentation" ng-repeat="item in items">
                <a role="menuitem" href="">
                    <span>Lundi, du 02 mai au 11 juillet 2016 (11 cours)</span>
                </a>
            </li><li role="presentation" ng-repeat="item in items">
                <a role="menuitem" href="">
                    <span>Une ou plusieurs journée(s) de cours</span>
                </a>
            </li><li role="presentation" ng-repeat="item in items">
                <a role="menuitem" href="">
                    <span>Un cours d'essai</span>
                </a>
            </li>
        </ul>
      </div>
*/

  render(){
    return (
      <Dropdown
        {...this.props}
      />
    );
  }

}
