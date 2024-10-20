import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productReducer'; // Assuming this is the correct path
import ProductCountReducer from './ProductCountReducer';
import StepperReducer from './StepperReducer';
export const store = configureStore({
  reducer: {
    products: productReducer,
    productCount:ProductCountReducer,
    address:StepperReducer
  },
});
