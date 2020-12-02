import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../pages/homePage';
import CoffeePage from '../pages/coffeePage';
import GoodsPage from '../pages/goodsPage';
import ItemPage from '../pages/itemPage';

export default class App extends Component {

  render() {
    return (
      <Router>
          <Route path='/' exact component={HomePage} />
          <Route path='/coffee' exact component={CoffeePage} />
          <Route path='/coffee/:id' render={
              ({ match }) => {
                const { id } = match.params;
                return <ItemPage id={id} path='coffee' />
              }
            } />
          <Route path='/goods' exact component={GoodsPage} />
          <Route path='/goods/:id' render={
              ({ match }) => {
                const { id } = match.params;
                return <ItemPage id={id} path='goods' />
              }
            } />
      </Router>
    )
  }
}
