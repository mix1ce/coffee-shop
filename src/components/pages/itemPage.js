import React, { Component } from 'react';
import DbService from '../../service/dbService';
import Header from '../header';
import Footer from '../footer';
import ItemDetail from '../itemDetail/itemDetail';
import ErrorMessage from '../errorMessage/errorMessage';


export default class ItemPage extends Component {

  state = {
    item: null,
    error: false
  }

  dbService = new DbService();

  componentDidMount() {
    const { id, path } = this.props;
    this.dbService.getItem(path, id).then(
      item => {
        this.setState({ item })
      }
    )
  }

  componentDidCatch() {
    console.log('error');
    this.setState({
      error: true
    })
  }

  render() {

    if (this.state.error) {
      return <ErrorMessage />
    }

    return (
      <>
        <div className="content">
          <section className="banner">
            <div className="container">
              <Header />
              <h1 className="title title_big">Our Coffee</h1>
            </div>
          </section>

          <section className="info">
            <div className="container">

              <ItemDetail
                item={this.state.item} />
            </div>

          </section>
        </div>

        <Footer />

      </>
    )
  }
}
