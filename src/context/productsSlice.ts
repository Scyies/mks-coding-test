import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { IData } from './cartSlice';

export interface ProductsState {
  products: IData[];
  loading: boolean;
  error: any;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

export const productsFetch = createAsyncThunk(
  'products/productsFetch',
  async (url: string, thunkApi) => {
    const response: AxiosResponse = await axios.get(url);

    return response.data;
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productsFetch.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(productsFetch.fulfilled, (state, { payload }) => {
      state.products = payload;
    });
    builder.addCase(productsFetch.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }
    });
  },
});

export default productsSlice.reducer;
