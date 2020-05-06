import React from 'react';

import './page.scss';
import Cart from '../cart';

const CartPage = () => {
  return (
    <div className="content">
      <div className="page">

        <div className="page-header">
          <div className="page-header__title">
            Shopping Cart
          </div>
        </div>

        
        <Cart />

      </div>
    </div>
  );
}

export default CartPage;