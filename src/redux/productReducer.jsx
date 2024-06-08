import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import p3_img from "../Components/Assets/product_3.png";
import axios from "axios";
const initialState = {
  products:[],
  status:'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error:null
}
const Product_url = 'https://localhost-44v9.onrender.com/product/getproducts';
export const fetchProduct = createAsyncThunk('products/fetchproducts',async ()=>{

  try {

    const response = await axios.get(Product_url,{
      headers:{
        'Authorization': 'Bearer'+' '+localStorage.getItem("token")
      }
    });
    
    return [...response?.data?.data];
    
  } catch (error) {
    return error.message;
  }

});
export const productSlice = createSlice({
    name:"products",
    initialState,
    
    
      reducers:{

        fetchProducts:(state,action)=>{

         

        }


      },
      extraReducers: (builder) => {
        builder
          .addCase(fetchProduct.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchProduct.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.products = action.payload;  // Assuming payload is the product array
          })
          .addCase(fetchProduct.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      }

});

// Action creators are generated for each case reducer function
export const { fetchProducts } = productSlice.actions;

export default productSlice.reducer;
