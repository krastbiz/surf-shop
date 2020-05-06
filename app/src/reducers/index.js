import actions from '../action-types';

import updateProductList from './product-list';
import updateShoppingCart from './cart';
import updateMenu from './menu';

const initialState = {
  productList: {
    products: [],
    pagination: {
      itemsPerPage: 9,
      currPage: 1,
      pages: 1,
    },
    loading: true,
    error: null
  },

  cart: {
    items: [],
    totalItems: 0,
    totalCost: 0,
    vat: 0.12
  },

  menu: {
    active: false
  }
};



const reducer = (state, action) => {
  
  return {
    ...state,
    productList: updateProductList(state, action),
    cart: updateShoppingCart(state, action),
    menu: updateMenu(state, action)
  };
}

export default reducer;