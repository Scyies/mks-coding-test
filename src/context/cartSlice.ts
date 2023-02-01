import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/context/store';

export interface IData {
  description: string;
  id: number;
  name: string;
  photo: string;
  price: string;
  quantity?: number;
  cartPrice?: string;
}

export interface CartState {
  cartItems: IData[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

const initialState: CartState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<IData>): void => {
      const repeatedIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (repeatedIndex >= 0) {
        state.cartItems[repeatedIndex].quantity! += 1;
        state.cartItems[repeatedIndex].cartPrice! = String(
          Number(state.cartItems[repeatedIndex].price) *
            state.cartItems[repeatedIndex].quantity!
        );
      } else {
        const newProduct = { ...action.payload, quantity: 1 };
        state.cartItems.push(newProduct);
      }
    },
    removeCartItems: (state, action: PayloadAction<number>): void => {
      const updatedState = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartItems = updatedState;
    },
    increaseQtd: (state, action: PayloadAction<number>): void => {
      const productIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      state.cartItems[productIndex].quantity! += 1;
      state.cartItems[productIndex].cartPrice! = String(
        Number(state.cartItems[productIndex].price) *
          state.cartItems[productIndex].quantity!
      );
    },
    decreaseQtd: (state, action: PayloadAction<number>): void => {
      const productIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (state.cartItems[productIndex].quantity! > 1) {
        state.cartItems[productIndex].quantity! -= 1;
        state.cartItems[productIndex].cartPrice! = String(
          Number(state.cartItems[productIndex].price) *
            state.cartItems[productIndex].quantity!
        );
      } else {
        const updatedState = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
        state.cartItems = updatedState;
      }
    },
  },
});

export const { setCartItems, removeCartItems, increaseQtd, decreaseQtd } =
  cartSlice.actions;

export const selectCart = (state: RootState) => state.cartItems.cartItems;

export const totalCart = (state: RootState) =>
  state.cartItems.cartItems.reduce((acc, object) => {
    return acc + Number(object.cartPrice!);
  }, 0);
export const cartTotalItems = (state: RootState) =>
  state.cartItems.cartItems.length;

export default cartSlice.reducer;
