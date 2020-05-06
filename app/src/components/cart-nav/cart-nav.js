import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './cart-nav.scss';
import cartIcon from '../../images/icons/icon-cart-white.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CartNav extends Component {

  render() {

    const { cart } = this.props;

    return (
      <Link to="/cart" className="cart">
          <div class="cart-img">
            <img src={cartIcon} alt="Cart" />
          </div>
          <div class="cart-info">
            <div class="cart-info__items">{cart.totalItems} items</div>
            <div class="cart-info__total">€{cart.totalCost}</div>
          </div>
      </Link>
    );
  }
}

const mapStateToProps = ({ cart }) => {
  return {
    cart
  }
}

export default connect(mapStateToProps)(CartNav);