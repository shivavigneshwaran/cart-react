import React, { useContext, useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import './CSS/shopcategory.css';
import { ShopContext } from "../Context/ShopContext";
import dropdown from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Item';
import { fetchProduct } from "../redux/productReducer";


const ShopCategory = (props) => {


    const dispatch = useDispatch();
    const products = useSelector((state) => state?.products?.products);
    const status = useSelector((state) => state?.products?.status);
    const error = useSelector((state) => state?.products?.error);


useEffect(()=>{
    dispatch(fetchProduct());
    console.log('status',status,products);
},[]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

   
    
    return (
    <div className="shopcategory">
        <img src={props.banner} className="shopcategory-banner" alt="banner" />

        <div className="shopcategory-indexsort">
            <p>
                <span>Showing 1 to 12</span> out of 36 products
            </p>
            
            <div className="shopcategory-sort">
                Sort by <img src={dropdown} alt="" />
            </div>
        </div>
        <div className="shopcategory-products">
        {Array.isArray(products) && products.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return (<p>No Products Availabe...</p>);
          }
        })}
        </div>
        
    </div>
    )
}

export default ShopCategory;