import React, { Component } from 'react';

import './searchForm.sass'

export default class SearchForm extends Component {

  state = {
    term: ''
  }

  onUpdateSearch = ({ target }) => {
    const term = target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term)
  }

  render() {
    return (
      <form action="#" className="form__search">
        <label className="form__search-label" htmlFor="filter">Looking for</label>
        <input
          id="filter"
          type="text"
          placeholder="start typing here..."
          className="form__search-input"
          value={this.state.term}
          onChange={this.onUpdateSearch}
        ></input>
      </form>
    )
  }
}
