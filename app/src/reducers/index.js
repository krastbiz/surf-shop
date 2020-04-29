import actions from '../action-types';

import img from '../images/product-surf.jpg';

const initialState = {
  products: [],
  pagination: {
    itemsPerPage: 9,
    currPage: 1,
    pages: 1,
  },
  loading: true
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actions.PRODUCTS_LOADED:
      return {
        products: action.payload,
        loading: false,
        pagination: {
          itemsPerPage: 9,
          currPage: 1
        },
      };

    default:
      return state;
  }

  return state;
}

export default reducer;