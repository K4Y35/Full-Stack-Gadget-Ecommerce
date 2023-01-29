export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  product,
});
export const removeFromCart = (productId) => ({
  type: "REMOVE_FROM_CART",
  productId,
});

export const updateCartTotal = (total) => ({
  type: 'UPDATE_CART_TOTAL',
  total
});