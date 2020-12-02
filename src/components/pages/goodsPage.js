import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import DbService from '../../service/dbService';
import ErrorMessage from '../errorMessage/errorMessage';
import Footer from '../footer';
import HeaderBaner from '../headerBaner/headerBaner';
import ItemDetail from '../itemDetail/itemDetail';
import ItemList from '../itemList/itemList';


class GoodsPage extends Component {

  state = {
    error: false
  }

  dbService = new DbService();

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
        <HeaderBaner title="Our Goods" />

          <section className="info">
            <div className="container">
              <ItemDetail
                name="About our goods"
                img={process.env.PUBLIC_URL + '/img/coffee_cup.jpg'}
                text={<div className="info__text">
                  <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                  <p>
                    Afraid at highly months do things on at. Situation recommend objection do intention
                          so questions. <br />
                          As greatly removed calling pleased improve an. Last ask him cold feel<br />
                          met spot shy want. Children me laughing we prospect answered followed. At it went<br />
                          is song that held help face.</p>
                </div>}
              />
            </div>

            <div className="line"></div>
          </section>
          <div className="container">
            <ItemList
              onItemSelected={(itemId) => {
                this.props.history.push(`goods/${itemId}`)
              }}
              shadow
              getData={() => this.dbService.getData('goods')} />

          </div>
        </div>


        <Footer />
      </>
    )
  }
}

export default withRouter(GoodsPage);
