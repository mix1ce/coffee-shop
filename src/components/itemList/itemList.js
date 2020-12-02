import React, { Component } from 'react';
import Spinner from '../spinner';

import './itemList.sass';

export default class ItemList extends Component {

  state = {
    itemList: null
  }

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .then(itemList => {
        this.setState({
          itemList
        })
      })
  }

  searchItems = (items, term = '') => {
    if (term.lenght === 0) {
      return items
    }

    return items.filter((item) => {
      return item.name.toUpperCase().indexOf(term.toUpperCase()) > -1
    })
  }

  filterItems = (items, filter = 'all') => {
    if (filter === 'all') {
      return items
    } else {
      return items.filter(item => item.country.toUpperCase().indexOf(filter.toUpperCase()) > -1)
    }

  }


  renderItems(arr) {
    const { shadow, coffeePage } = this.props;
    return (
      arr.map(item => {
        const { id, url, name, price, country } = item;
        return (
          <div
            className={`list__item ${shadow ? "item-shadow" : ""}`}
            key={item.id}
            onClick={() => this.props.onItemSelected(id)} >
            <img src={url} alt={name}></img>
            <div className="list__item-title">{name}</div>
            {coffeePage ? <div className="list__item-country">{country}</div> : null}
            <div className="list__item-price">{price}</div>
          </div>
        )
      }))
  }

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />
    }

    // const visiblePosts = this.filterPost(this.searchPost(posts, term), filter);
    const visibleItems = this.filterItems(this.searchItems(itemList, this.props.term), this.props.filter);

    const items = this.renderItems(visibleItems);

    return (
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="list__wrapper">
            {items}
          </div>
        </div>
      </div>
    )
  }
}
