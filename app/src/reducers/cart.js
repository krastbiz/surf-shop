import actions from '../action-types';

const updateCartItems = (cartItems, item, idx) => {
  
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ]
  }

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

const updateCartItem = (product, item = {}, quantity = 1) => {

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
    count: count + quantity,
    title: title,
    description,
    img,
    total: total + quantity * price
  };
}

const updateOrder = (state, itemId, quantity) => {
  const { productList: { products }, cart } = state;
  const product = products.find((el) => el.id === itemId);

  const oldItemIdx = cart.items.findIndex((el) => el.id === itemId);
  const oldItem = cart.items[oldItemIdx];

  let newItem = updateCartItem(product, oldItem, quantity);
  const newCart = {...cart};
  newCart.items = updateCartItems(cart.items, newItem, oldItemIdx);
  newCart.totalCost = newCart.items.reduce((p,c) => p + c.total, 0);
  newCart.totalItems = newCart.items.reduce((p,c) => p + c.count, 0);

  return {
    ...newCart        
  }
}

const updateShoppingCart = (state, action) => {

  if (state === undefined) {
    return {
      items: [],
      totalItems: 0,
      totalCost: 0,
      vat: 0.12
    };
  }

  switch (action.type) {
    case actions.ITEM_ADDED_TO_CART:
      return updateOrder(state, action.payload, 1);

    case actions.ITEM_REMOVED_FROM_CART:
      return updateOrder(state, action.payload, -1);

    case actions.ALL_ITEMS_REMOVED_FROM_CART:
      const item = state.cart.items.find((i) => i.id === action.payload);
      return updateOrder(state, action.payload, -item.count);
    
    default:
      return state.cart;
      
  }
}

export default updateShoppingCart;