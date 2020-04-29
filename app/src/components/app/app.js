import React, { Component } from 'react'

import './app.scss';
import Header from '../header';
import Aside from '../aside';
import Footer from '../footer';

import { ProductPage, CartPage } from '../pages';
import { Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {

    return (
      <div className="app">
        <Header />

        <section className="products">

          <div className="container d-flex">
            
            <Aside />

            <Switch>

              <Route exact path="/" component={ProductPage} />

              <Route path="/cart" component={CartPage} />

            </Switch>
          </div>

        </section>

        <Footer />

      </div>
    );
  }
}

export default App;