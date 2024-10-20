import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
const initialState = {
    userData:{
        name:"",
        phone:"",
        address:"",
        pincode:"",
        landmark:"",
        cityTown:"",
        stateId:"",
        countryId:""
    },
    addressData:[],
    countrys:[],
    states:[],
    status:'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error:null
  }
export const stepperSlice = createSlice({
    name:"address",
    initialState,
    reducers:{
        setAddress:(state,action)=>{
            state.addressData = action.payload
        },
        setStates:(state,action)=>{
            state.states =  action.payload
        },
        setCountrys:(state,action)=>{
            state.countrys =  action.payload
        },
        setUserData: (state, action) => {
            state.userData[action.payload.field] = action.payload.value;
        },
        setclose:(state)=>{
            state.userData = initialState.userData;
        },
        setStatus:(state,action)=>{
            state.status = action.payload;
        },
        setEditUserData:(state,action)=>{
            state.userData = action.payload;
        }

    }
});

export const {setAddress,setStates,setCountrys,setUserData,setclose,setStatus,setEditUserData} = stepperSlice.actions;

export default stepperSlice.reducer;

