import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import DbService from '../../service/dbService';
import ErrorMessage from '../errorMessage/errorMessage';
import Footer from '../footer';
import HeaderBaner from '../headerBaner/headerBaner';
import ItemDetail from '../itemDetail/itemDetail';
import ItemList from '../itemList/itemList';
import SearchForm from '../search-form/searchForm';
import TabsFilter from '../tabsFilter/tabsFilter';

class CoffeePage extends Component {

  state = {
    error: false,
    term: '',
    filter: 'all'
  }

  dbService = new DbService();

  componentDidCatch() {
    console.log('error');
    this.setState({
      error: true
    })
  }

  onUpdateSearch = (term) => {
    this.setState({ term })
  }

  onChangeFilter = (filter) => {
    this.setState({ filter })
  }

  render() {

    if (this.state.error) {
      return <ErrorMessage />
    }

    return (
      <>
        <div className="content">
          <HeaderBaner title="Our Coffee" />

          <section className="info">
            <div className="container">

              <ItemDetail
                name="About our beans"
                img={process.env.PUBLIC_URL + '/img/coffee_girl.jpg'}
                text={
                  <div className="info__text">
                    <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                    <p>Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. <br />
                        As greatly removed calling pleased improve an. Last ask him cold feel<br />
                        met spot shy want. Children me laughing we prospect answered followed. At it went<br />
                        is song that held help face.</p>
                  </div>
                } />

              <div className="line"></div>
            </div>
          </section>
          <section className="shop">
            <div className="container">
              <div className="filter-wrap">
                <SearchForm
                  onUpdateSearch={this.onUpdateSearch} />
                <TabsFilter
                  onChangeFilter={this.onChangeFilter} />
              </div>
              <ItemList
                onItemSelected={(itemId) => {
                  this.props.history.push(`coffee/${itemId}`)
                }}
                shadow
                coffeePage
                getData={() => this.dbService.getData('coffee')}
                term={this.state.term}
                filter={this.state.filter} />
            </div>
          </section>
        </div>
        <Footer />
      </>
    )
  }
}

export default withRouter(CoffeePage);
