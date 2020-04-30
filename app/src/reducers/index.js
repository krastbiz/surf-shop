import actions from '../action-types';

import img from '../images/product-surf.jpg';

const initialState = {
  productList: {
    products: [],
    pagination: {
      itemsPerPage: 9,
      currPage: 1,
      pages: 1,
    }
  },
  loading: true,

  error: null,

  cart: {
    items: [],
    totalItems: 0,
    totalCost: 0
  }
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actions.FETCH_PRODUCTS_REQUESTED:
      return {
        ...state,
        productList: {
          ...state.productList,
          products: [],
        },
        
        loading: true,
        error: null
      }

    case actions.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        productList: action.payload,
        
        loading: false,

        error: null
      };

    case actions.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        productList: {
          ...state.productList,
          products: []
        },
        
        loading: false,
        error: action.payload
      }

    case actions.ITEM_ADDED_TO_CART:

      const { productList: { products } } = state 

      const productId = action.payload;
      const product = products.find((el) => el.id === productId);

      const oldItemIdx = state.cart.items.findIndex((el) => el.id === productId);
      const oldItem = state.cart.items[oldItemIdx];
      

      const newCart = {...state.cart};

      let newItem = {};
      
      if (!oldItem) {
        newItem = {
          id: product.id,
          price: product.price,
          count: 1,
          title: product.name,
          total: product.price
        };

        newCart.items = [
          ...state.cart.items,
          newItem
        ]
      } else {
        newItem = {
          ...oldItem,
          count: oldItem.count + 1,
          total: oldItem.total + oldItem.price
        };

        newCart.items = [
          ...state.cart.items.slice(0, oldItemIdx),
          newItem,
          ...state.cart.items.slice(oldItemIdx + 1)
        ]
      }


      newCart.totalCost = newCart.items.reduce((p,c) => p + c.total, 0);
      newCart.totalItems = newCart.items.reduce((p,c) => p + c.count, 0);


      return {
        ...state,
        cart: newCart        
      }

    default:
      return state;
  }

  return state;
}

export default reducer;