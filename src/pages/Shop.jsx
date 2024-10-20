import React,{useContext, useEffect,useState} from "react";
import Hero from "../Components/Hero/Hero";
import Poppular from "../Components/Poppular/Poppular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import {useDispatch,useSelector} from "react-redux";


const Shop = () => {
    const productData = useSelector((state) => state?.products?.products);
    const [datas , setDatas] = useState([]);
    useEffect(()=>{
        if(productData?.length !== 0 ){ 
            setDatas(productData);
        }
    },[]);
    return (
    <div>
       <Hero  />
       <Poppular datas = {datas}/>
       <Offers />
       <NewCollections datas = {datas}/>
       <NewsLetter />
    </div>
    )
}

export default Shop;