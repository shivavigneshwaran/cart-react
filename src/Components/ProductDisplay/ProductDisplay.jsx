import React from "react";
import { useState,useEffect } from 'react';
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { Box,SimpleGrid,Card,CardBody, VStack, Heading, Flex, Text, Button} from "@chakra-ui/react";
import { toast, ToastContainer } from 'react-toastify';
import {useDispatch,useSelector} from "react-redux";
import { addCount } from "../../redux/ProductCountReducer";
import { productCartDataManage } from "../../redux/ProductCountReducer";




const ProductDisplay = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
 
  const handleCheckAuth = ()=>{
  const user = localStorage.getItem('user'); 
  if(!user){
    toast.info('Make Login To Add products in cart..');  
    return false;
  }
 
  // let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // if(cart.length !== 0){
   
  //   const itemInCart = cart.find((item)=> item._id === product._id);
  //   if(itemInCart){
  //     cart = cart.map((item,i)=>{
  //         if(item._id === product._id){
  //           return {
  //             ...item,
  //             quantity:item.quantity+1
  //           }
  //         }else{
  //           return item;
  //         }

  //     });
  //     console.log('cartItemmatchid',cart);
  //   }else{

  //     cart.push({...product,quantity:1});
  //     console.log('cartItem',cart); 
  //   }

  // }else{
   
  //   cart.push({...product,quantity:1});
  //   console.log('cartData',cart);
   
  // }


  // localStorage.setItem('cart',JSON.stringify(cart));

  // const totalQuantity = cart.reduce((acc,item)=> acc+item.quantity,0);
  dispatch(productCartDataManage(product));

  toast.info('Product Added to the cart..!');  
   
  }

 
  
  return (
    <>
      <Box className="Productdisplay"  >
        <VStack width="8rem">
            <Box mt="10px"><img src={"http://localhost:4000/images/"+product.image} alt="product_img" /></Box>
            <Box mt="10px"><img src={"http://localhost:4000/images/"+product.image} alt="product_img" /></Box>
            <Box mt="10px"><img src={"http://localhost:4000/images/"+product.image} alt="product_img" /></Box>
            <Box mt="10px"><img src={"http://localhost:4000/images/"+product.image} alt="product_img" /></Box>
        </VStack>
        <Box w="25rem" padding="10px">
            <img src={"http://localhost:4000/images/"+product.image} alt="" className="productimage-main-img" />
        </Box>
        <Box w="55rem" margin="0px 15px" p="10px">
          <Heading>{product.name}</Heading>
          <Box as="div" className="productdisplay-right-star">
          <img src={star_icon} alt="star_icon" />
          <img src={star_icon} alt="star_icon" />
          <img src={star_icon} alt="star_icon" />
          <img src={star_icon} alt="star_icon" />
          <img src={star_dull_icon} alt="star_dull_icon" />
          <p>(122)</p>
          </Box>
          <Flex className="productdisplay-right-prices">
            <Text className="productdisplay-right-price-old">${product.old_price}</Text>
            <Text className="productdisplay-right-price-new">${product.new_price}</Text>
          </Flex>
        
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet
          optio, quis enim officia iusto perferendis. Nisi dolorum quaerat nemo
          eaque, nostrum enim ea necessitatibus soluta magni dolorem ipsum
          explicabo!
        </Box>
        <Box className="productdisplay-right-size">
          <Heading as="h1">Select Size</Heading>
          <Box className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </Box>
        </Box>
        <Button onClick={handleCheckAuth}>Add to Cart</Button>
        <p className="productdisplay-right-category"><span>Category :</span>Women, T-shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>
        </Box>
      </Box>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss closeButton={true} draggable pauseOnHover containerId={"friendRequest"}/>

    </>
   
  );
};

export default ProductDisplay;
