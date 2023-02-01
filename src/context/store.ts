import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/context/cartSlice';
import { productsFetch } from './productsSlice';
import { productsApi } from './productsApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const createStore = () =>
  configureStore({
    reducer: {
      cartItems: cartReducer,
      [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware),
  });

export const store = createStore();

const rootReducer = combineReducers({
  cart: cartReducer,
  api: combineReducers({
    getFirstProducts: productsApi.reducer,
  }),
});

export const setupStore = () => configureStore({ reducer: rootReducer });

setupListeners(store.dispatch);

export const data = store.dispatch(
  productsFetch(
    'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC'
  )
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
