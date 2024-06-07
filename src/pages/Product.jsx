import React from "react";
import { useState,useEffect,useContext } from 'react';
import { useParams } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import { fetchProduct } from "../redux/productReducer";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";

const Product = () => {
    const products = useSelector((state) => state?.products?.products);
    const product_id = useParams();
    const productData = products.find((data) => data.id === Number(product_id.productId));
    const [product, setProduct] = useState({});
    
      useEffect(() => {
        if (productData) {
          setProduct(productData);
        }
      }, [product_id]);
    return (<div>
        <Breadcrum product={product} />
        <ProductDisplay product={product} />
        <DescriptionBox />
    </div>)
}

export default Product;