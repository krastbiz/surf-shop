import actions from '../action-types';

const productsLoaded = (newProducts) => {
  return {
    type: actions.FETCH_PRODUCTS_SUCCESS,
    payload: newProducts
  }
}

const productsRequested = () => {
  return {
    type: actions.FETCH_PRODUCTS_REQUESTED
  }
}

const productsError = (error) => {
  return {
    type: actions.FETCH_PRODUCTS_FAILURE,
    payload: error
  }
}

const itemAddedToCart = (id) => {
  return {
    type: actions.ITEM_ADDED_TO_CART,
    payload: id
  }
}

const itemRemovedFromCart = (id) => {
  return {
    type: actions.ITEM_REMOVED_FROM_CART,
    payload: id
  }
}

const allItemsRemovedFromCart = (id) => {
  return {
    type: actions.ALL_ITEMS_REMOVED_FROM_CART,
    payload: id
  }
}

const fetchProducts = (productService, dispatch) => () => {

  dispatch(productsRequested());
  productService.getProducts()
    .then((data) => dispatch(productsLoaded(data)))
    .catch((error) => dispatch(productsError(error)));
}

const menuToggled = () => {
  return {
    type: actions.MENU_TOGGLED
  }
}

 
export {
  fetchProducts,
  itemAddedToCart,
  itemRemovedFromCart,
  allItemsRemovedFromCart,
  menuToggled
};