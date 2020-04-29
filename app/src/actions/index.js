import actions from '../action-types';

const productsLoaded = (newProducts) => {
  return {
    type: actions.PRODUCTS_LOADED,
    payload: newProducts
  }
}

 
export {
  productsLoaded
};