import React from 'react';
import { connect } from 'react-redux';
import { itemRemovedFromCart, allItemsRemovedFromCart, itemAddedToCart } from '../../actions';

import './cart.scss';

const Cart = (props) => {

  const { cart, onItemAdded, onItemRemoved, onAllItemsRemoved } = props;

  return (
    <div className="cart-content">

      <table className="cart-table">
        <thead className="cart-table__heading">
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th className="cart-table__heading-qty">Qty</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>

        <tbody className="cart-table__body">
          {
            cart.items.map((item) => getCartItem(item, onItemAdded, onItemRemoved, onAllItemsRemoved))
          }
        </tbody>
      </table>
        { getCartSummary(cart) }
    </div>
  );

};

const getCartSummary = (cart) => {
  return (
    <div className="cart-summary">
      <div className="cart-summary__title">REVIEW YOUR CART</div>
      <div className="cart-summary-content">
        <div className="cart-summary-content__row">
          <div className="cart-summary-content__label">YOUR CART</div>
          <div className="cart-summary-content__value">€. {cart.totalCost}</div>
        </div>
        <div className="cart-summary-content__row">
          <div className="cart-summary-content__label">SHIPPING</div>
          <div className="cart-summary-content__value">FREE</div>
        </div>

        <div className="cart-summary-content__row">
          <div className="cart-summary-content__label">vat</div>
          <div className="cart-summary-content__value">€. {cart.totalCost * cart.vat}</div>
        </div>

        <div className="cart-summary-content__row cart-summary-content__total">
          <div className="cart-summary-content__label">ORDER TOTAL</div>
          <div className="cart-summary-content__value">€. {cart.totalCost * cart.vat + cart.totalCost}</div>
        </div>
      </div>                

      <button className="cart-summary-checkout">checkout</button>
    </div>
  );
}

const getCartItem = (item, onItemAdded, onItemRemoved, onAllItemsRemoved) => {

  const { id, img, title, description, price, count, total } = item;

  return (
    <tr className="cart-item" key={id}>
      <td className="cart-item__img"><img src={img} alt="Product Image" /></td>
      <td className="cart-item__text">
        <div className="cart-item__title">
          {title}
        </div>
        <div className="cart-item__descr">
          {description}
        </div>
      </td>
      <td className="cart-item__unit-price">€. {price}</td>
      <td className="cart-item__qty">
        <div className="input-number">
          <div className="input-number__btn input-number__decr" onClick={() => onItemRemoved(id)}>{"<"}</div>
          <input type="number" name="" value={count} readOnly/>
          <div className="input-number__btn input-number__incr" onClick={() => onItemAdded(id)}>{">"}</div>
        </div>
      </td>
      <td className="cart-item__subtotal">€. {total}</td>
      <td className="cart-item__remove" onClick={() => onAllItemsRemoved(id)}>
        <div className="remove"></div>
      </td>
    </tr>
  );
}

const mapStateToProps = ({cart}) => {
  return {
    cart
  }
}

const mapDispatchToProps = {
  onItemAdded: itemAddedToCart,
  onItemRemoved: itemRemovedFromCart,
  onAllItemsRemoved: allItemsRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);