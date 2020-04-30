import React from 'react';

import './page.scss';

import { ProductList } from '../../containers';


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
      </div>
    </div>
  );
}

export default ProductPage;