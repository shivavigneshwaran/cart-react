import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productReducer'; // Assuming this is the correct path

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
