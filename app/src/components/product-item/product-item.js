import React from 'react';

import './product-item.scss';

const ProductItem = (props) => {

  console.log ("Product Item props");
  console.log (props);

  const { product, onAddToCart } = props;

  return (
    <div className="products-item">

      <div className="products-item-inner">
        <div className="products-item__mark products-item__mark_new">
          <div className="products-item__mark-label">{product.markLabel}</div>
        </div>

        <div 
            className="products-item__add-to-cart" 
            onClick={() => { onAddToCart(product.id) }}>
        </div>

        <a href="#" className="products-item__img-wrap">
          <img src={product.img} alt="Surf" className="products-item__img" />
        </a>

        <div className="products-item__text">
          <a href="#" className="products-item__title">
            {product.name}
          </a>

          <div className="products-item__prices">
            <div className="products-item__price">
              {product.price - (product.price * product.discount)}
            </div>
            <div className="products-item__price products-item__price_old">
              {product.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;