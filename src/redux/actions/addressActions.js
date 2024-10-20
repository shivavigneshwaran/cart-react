import axios from "axios";
import {setCountrys,setStates,setAddress,setStatus} from "../StepperReducer"

export const fetchCountry = ()=> async dispatch => {
	const country_url = 'https://localhost-44v9.onrender.com/country/get-countrys';
	let response;
	try{

		response = await axios.get(country_url,{
			 headers:{
		        'Authorization': 'Bearer'+' '+localStorage.getItem("token")
		      }
		});

		dispatch(setCountrys(response.data.data));
	}catch(error){
		console.log("error fetching country :",error);
		return;
	}
}

export const fetchState = () => async dispatch =>{
	const state_url = 'https://localhost-44v9.onrender.com/state/get-state';
	let response;

	try{
		response = await axios.get(state_url,{
			 headers:{
		        'Authorization': 'Bearer'+' '+localStorage.getItem("token")
		      }
		});
		dispatch(setStates(response.data.data));
	}catch(error){
		console.log("error fetching states :",error);
		return;
	}
}


export const fetchUserAddress = (id) => async dispatch =>{
	const userAddress_url = 'https://localhost-44v9.onrender.com/address/get-address';
	let response;
	try{
		dispatch(setStatus("loading"));
		response = await axios.get(userAddress_url,{
		 params: {id},
			 headers:{
		        'Authorization': 'Bearer'+' '+localStorage.getItem("token")
		      }
		});
		dispatch(setAddress(response?.data?.data));
		dispatch(setStatus("succeeded"));
	}catch(error){
		console.log("error fetching user Addresses :",error);
	}

}


export const fetchAddress = (id) => async dispatch =>{
	const address_url = 'https://localhost-44v9.onrender.com/address/get-address';
	let response;
	try {
		response = await axios.get(address_url,{
			params:{id},
			headers:{
		        'Authorization': 'Bearer'+' '+localStorage.getItem("token")
		      }
		});
		console.log("response-fetchAddress",response);
	} catch (error) {
		console.log("error fetching Addresses :",error);
	}
}