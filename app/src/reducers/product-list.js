import actions from '../action-types';

const updateProductList = (state, action) => {

  if (state === undefined) {
    return {
      products: [],
      pagination: {
        itemsPerPage: 9,
        currPage: 1,
        pages: 1,
      },
      loading: true,
      error: null
    };
  }

  switch (action.type) {
    case actions.FETCH_PRODUCTS_REQUESTED:
      return {
        ...state.productList,
        products: [],
        loading: true,
        error: null
      }

    case actions.FETCH_PRODUCTS_SUCCESS:
      return {
        ...action.payload,
        loading: false,
        error: null
      };

    case actions.FETCH_PRODUCTS_FAILURE:
      return {
        ...state.productList,
        products:[],
        loading: false,
        error: action.payload
      }

    default:
      return state.productList;
  }
}

export default updateProductList;