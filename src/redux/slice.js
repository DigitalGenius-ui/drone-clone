import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  cartTotalAmount : 0,
  cartTotalQuantity : 0,
}

export const droneSlice = createSlice({
  name: 'drone',
  initialState,
  reducers: {
    addItems : (state, action) => {
      const findIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if(findIndex >= 0){
        state.cart[findIndex].cartQuantity += 1;
      }else{
        const temptProduct = {...action.payload, cartQuantity : 1}
        state = state.cart.push(temptProduct);
      }
    },
    addLike : (state, action) => {
      state.cart.push(action.payload);
    },
    removeItem : (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id)
    },
    decreaseQuantity : (state, action) => {
      const findIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if(state.cart[findIndex].cartQuantity > 1) {
        state.cart[findIndex].cartQuantity -= 1;
      }else if(state.cart[findIndex].cartQuantity === 1){
        state.cart = state.cart.filter((item) => item.id !== action.payload.id)
      }
    },
    getTotal : (state, action) => {
      let { total, quantity } = state.cart.reduce((cartTotal, cartItem) => {
        const { price, cartQuantity } = cartItem;
        const totalItem = price * cartQuantity;

        cartTotal.total += totalItem;
        cartTotal.quantity += cartQuantity;

        return cartTotal
      }, {
        total : 0,
        quantity : 0
      });
      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    }
  }
});

export const { addItems, removeItem, decreaseQuantity, getTotal, addLike } = droneSlice.actions

export default droneSlice.reducer