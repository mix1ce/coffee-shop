import React, { Component } from 'react';

import './tabsFilter.sass'

export default class TabsFilter extends Component {

  onChangeFilter = ({ target }) => {
    const tabs = document.querySelectorAll('.tabs__filter-btn');
    tabs.forEach(tab => tab.classList.remove('tabs-active'));
    target.classList.add('tabs-active');

    this.props.onChangeFilter(target.value);

  }

  render() {
    return (
      <div className="tabs__filter">
        <div className="tabs__filter-label">Or filter</div>
        <div className="tabs__filter-group">
          <div className="">
            <button
              onClick={this.onChangeFilter}
              className="tabs__filter-btn tabs-active"
              value="all"
            >all</button>
            <button
              onClick={this.onChangeFilter}
              className="tabs__filter-btn"
              value="Brazil"
            >Brazil</button>
          </div>
          <div className="">
            <button
              onClick={this.onChangeFilter}
              className="tabs__filter-btn"
              value="Kenya"
            >Kenya</button>
            <button
              onClick={this.onChangeFilter}
              className="tabs__filter-btn"
              value="Columbia"
            >Columbia</button>
          </div>
        </div>
      </div>
    )
  }
}
