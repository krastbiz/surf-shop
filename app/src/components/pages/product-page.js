import React from 'react';

import './page.scss';

import ProductList from '../product-list';
import Pagination from '../pagination';

const ProductPage = () => {

  return (
    <div className="content">
      <div className="page">

        <div className="page-header">
          <div className="page-header__title">
            Products
          </div>
        </div>

        <ProductList />
        
        <Pagination />
      </div>
    </div>
  );
}

export default ProductPage;