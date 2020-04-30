import React from 'react';
import ProductItem from '../product-item';

import './product-list.scss';

const ProductList = (props) => {

  const { products, onAddToCart } = props;

  return (
    <div className="products-list">
    {
      products.map((p) => {
        return <ProductItem key={p.id} product={p} onAddToCart={onAddToCart}/>;
      })
    }
    </div>
  );
}

export default ProductList;

