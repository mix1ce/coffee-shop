import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import DbService from '../../service/dbService';
import ErrorMessage from '../errorMessage/errorMessage';
import Footer from '../footer';
import Header from '../header';
import ItemList from '../itemList/itemList';

import './homePage.sass'

class HomePage extends Component {

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
      return <ErrorMessage/>
    }

    return (
      <>
        <div className="content">
          <section className="preview">
            <div className="container">
              <Header />
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <h1 className="preview__title title_big">Everything You Love About Coffee</h1>
                  <img className="beanslogo" src="logo/Beans_logo.svg" alt="Beans logo"></img>
                  <div className="preview__subtitle">We makes every day full of energy and taste</div>
                  <div className="preview__subtitle">Want to try our beans?</div>
                  <Link className="preview__btn" to='/coffee'>More</Link>
                </div>
              </div>
            </div>
          </section>
          <section className="about">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <div className="title">About Us</div>
                  <img className="beanslogo" src="logo/Beans_logo_dark.svg" alt="Beans logo"></img>
                  <div className="about__text">
                    <p>
                      Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                      Afraid at highly months do things on at. Situation recommend objection do intention
                      so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                      met spot shy want. Children me laughing we prospect answered followed. At it went
                      is song that held help face.
                  </p>
                    <p>
                      Now residence dashwoods she excellent you. Shade being under his bed her, Much
                      read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                      horrible but confined day end marriage. Eagerness furniture set preserved far
                      recommend. Did even but nor are most gave hope. Secure active living depend son
                      repair day ladies now.
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="best" className="best">
            <div className="container">
              <div className="title">Our best</div>
              <ItemList
                onItemSelected={(itemId) => {
                  this.props.history.push(`coffee/${itemId}`)
                }}
                dataClass="best"
                getData={() => this.dbService.getData('bestsellers')} />
            </div>
          </section>
        </div>

        <Footer />
      </>
    )
  }
}

export default withRouter(HomePage);
