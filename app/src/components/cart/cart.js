import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './cart.scss';
import cartIcon from '../../images/icons/icon-cart-white.png';
import { Link } from 'react-router-dom';

class Cart extends Component {

  render() {
    return (
      <Link to="/cart" className="cart">
          <div class="cart-img">
            <img src={cartIcon} alt="Cart" />
          </div>
          <div class="cart-info">
            <div class="cart-info__items">0 items</div>
            <div class="cart-info__total">€0</div>
          </div>
      </Link>
    );
  }
}

export default Cart;