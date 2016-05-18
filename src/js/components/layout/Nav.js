"use strict";

// Vendor modules
import React                          from "react";
import { IndexLink, Link }            from "react-router";
import './nav.scss';

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;

    let baseUrl = '/' + location.pathname;
    const coursesClass = baseUrl.match(/^\/calendrier/) ? "active" : "";
    const conferencesClass = baseUrl.match(/^\/conferences/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav className="navbar transparent navbar-inverse navbar-inner navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav custum-color">
              <li>
                <a href="http://www.mondeavie.ca" onClick={this.toggleCollapse.bind(this)}>
                  <span dangerouslySetInnerHTML={{__html: " &lt; RETOUR AU SITE" }}></span>
                </a>
              </li>
              <li className={coursesClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>CALENDRIER DES COURS</IndexLink>
              </li>
              <li className={conferencesClass}>
                <Link to="conferences" onClick={this.toggleCollapse.bind(this)}>CONFÉRENCES ET ATELIERS</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}