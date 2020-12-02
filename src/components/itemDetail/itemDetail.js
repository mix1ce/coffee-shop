import React, { Component } from 'react';
import Spinner from '../spinner';

import './itemDetail.sass'

export default class ItemDetail extends Component {


  itemInfo(item) {
    const { country, description, price } = item;

    return (
      <>
        <div className="info__point">
          <span>Country: </span>
          {country}
        </div>
        <div className="info__point">
          <span>Description: </span>
          {description}
        </div>
        <div className="info__point">
          <span>Price:  </span>
          <span className="info__point-price">{price}</span>
        </div>
      </>
    )
  }

  render() {
    const { item, text, name, img } = this.props;

    if (!(item || text)) {
      return <Spinner />
    }

    return (
      <div className="row">
        <div className="col-lg-5 offset-lg-1">
          <img className="info__img" src={item ? item.url : img} alt={item ? item.name : name}></img>
        </div>
        <div className="col-lg-4">
          <div className="title">{item ? item.name : name}</div>
          <img className="beanslogo" src={process.env.PUBLIC_URL + '/logo/Beans_logo_dark.svg'} alt="Beans logo"></img>
          {item ? this.itemInfo(item) : text}
        </div>
      </div>
    )
  }
}
