import actions from '../action-types';

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
    totalCost: 0,
    vat: 0.12
  }
};

const updateCartItems = (cartItems, item, idx) => {
  
  if (idx === -1) {
    return [
      ...cartItems,
      item
    ];
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ];
}

const updateCartItem = (product, item = {}, countInc = 1) => {

  const { id = product.id,
          price = product.price,
          count = 0, 
          title = product.name,
          description = product.description,
          img = product.img,
          total = 0 } = item;

  return {
    id: id,
    price: price,
    count: count + countInc,
    title: title,
    description,
    img,
    total: total + price
  };
}

const removeCartItem = (cartItems, idx) => {

  if (idx !== -1) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ];    
  } else {
    return [
      ...cartItems
    ]
  }
}

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

      const { productList: { products } } = state;
      const productId = action.payload;
      const product = products.find((el) => el.id === productId);

      const oldItemIdx = state.cart.items.findIndex((el) => el.id === productId);
      const oldItem = state.cart.items[oldItemIdx];

      const newCart = {...state.cart};
      let newItem = updateCartItem(product, oldItem);
      newCart.items = updateCartItems(state.cart.items, newItem, oldItemIdx);
      newCart.totalCost = newCart.items.reduce((p,c) => p + c.total, 0);
      newCart.totalItems = newCart.items.reduce((p,c) => p + c.count, 0);

      return {
        ...state,
        cart: newCart        
      }

    case actions.ITEM_REMOVED_FROM_CART:

      const { cart } = state;
      const id = action.payload;
      console.log(id);

      const idx = cart.items.findIndex((i) => i.id === id);
      console.log(idx);
      
      const newCart2 = {...cart};
      newCart2.items = removeCartItem(cart.items, idx);
      newCart2.totalCost = cart.items.reduce((p,c) => p + c.total, 0);
      newCart2.totalItems = cart.items.reduce((p,c) => p + c.count, 0);

      console.log(state);
      return {
        ...state,
        cart: newCart2
      }

    case actions.CART_ITEM_COUNT_CHANGED:

      const { id: itemId, inc } = action.payload;
      const cartItem = state.cart.items.find((el) => el.id === itemId);
      const cartItemIdx = state.cart.items.findIndex((el) => el.id === itemId);

      const newCartItem = updateCartItem(null, cartItem, inc);

      let newCartItems = [];
      if (newCartItem.count > 0) {
        newCartItems = updateCartItems(state.cart.items, newCartItem, cartItemIdx)
      } else {
        newCartItems = removeCartItem(state.cart.items, cartItemIdx);
      }
      

      return {
        ...state,
        cart: {
          ...state.cart,
          items: newCartItems,
          totalItems: newCartItems.reduce((p,c) => p + c.count, 0),
          totalCost: newCartItems.reduce((p,c) => p + c.total, 0),
        }
      };
    default:
      return state;
  }

  return state;
}

export default reducer;