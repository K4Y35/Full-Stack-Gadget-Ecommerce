const initialState = {
  cart: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.product] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((p) => p._id !== action.productId),
      };

    case "UPDATE_CART_TOTAL":
      return { ...state, total: action.total };

    default:
      return state;
  }
};

export default cartReducer;
