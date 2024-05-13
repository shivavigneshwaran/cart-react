import React from "react";
import { useState,useEffect,useContext } from 'react';
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";

const Product = () => {
    const all_product = useContext(ShopContext);
    const product_id = useParams();
    const product = all_product.all_product.find((data) => data.id === Number(product_id.productId));
    return (<div>
        <Breadcrum product={product} />
        <ProductDisplay product={product}/>
        <DescriptionBox/>
    </div>)
}

export default Product;