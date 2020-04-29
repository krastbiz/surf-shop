import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import store from './store';
import ProductService from './services';
import { ProductServiceProvider } from './components/product-service-context';

import { BrowserRouter as Router } from 'react-router-dom';

import './main.scss';

const productService = new ProductService();

ReactDOM.render(
  <Provider store={store}>
    <ProductServiceProvider value={productService}>
      <Router>
        <App/>
      </Router>
    </ProductServiceProvider>
  </Provider>,
  document.getElementById('root'));