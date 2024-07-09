import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (!item) {
        state.cart.push(action.payload);
      } else {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    removeProduct(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    incProductQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decProductQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0)
        cartSlice.caseReducers.removeProduct(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addProduct,
  removeProduct,
  incProductQuantity,
  decProductQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getNumPizzas = (store) =>
  store.cart.cart.reduce((acc, item) => acc + item.quantity, 0);
export const getTotalPrice = (store) =>
  store.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);

// get quantity by id
// Memoized selector for getting quantity by id
export const getQuantityById = (id) =>
  createSelector(
    (store) => store.cart.cart,
    (cart) => cart.find((item) => item.id === id)?.quantity ?? 0,
  );
