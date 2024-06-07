import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { Box,SimpleGrid,Card,CardBody, VStack, Heading, Flex, Text, Button,Hide,HStack, Show} from "@chakra-ui/react";
import {useDispatch,useSelector} from "react-redux";
import { toast, ToastContainer } from 'react-toastify';
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
    dispatch(productCartDataManage(product));

  toast.info('Product Added to the cart..!');  
  }
  return (
    <>
    <Box className="Productdisplay"  m={{base:"0px 10px",md:"0px 50px",lg:"0px 90px",xl:"0px 170px"}}>
       <Hide breakpoint='(max-width: 780px)'>
        <VStack width={{base:"20%",md:"8rem",lg:"8rem",xl:"8rem"}}>
            <Box mt="10px"><img src={"http://localhost:4000/images/"+product.image} alt="product_img" /></Box>
            <Box mt="10px"><img src={"http://localhost:4000/images/"+product.image} alt="product_img" /></Box>
            <Box mt="10px"><img src={"http://localhost:4000/images/"+product.image} alt="product_img" /></Box>
            <Box mt="10px"><img src={"http://localhost:4000/images/"+product.image} alt="product_img" /></Box>
        </VStack>
        </Hide>
        <Box w={{base:"40%",md:"25rem",lg:"25rem",xl:"25rem"}} padding={{base:"2px",md:"10px",lg:"10px",xl:"10px"}} h={{base:"410px",md:"586px",lg:"586px",xl:"586px"}}>
        <Hide breakpoint='(max-width: 780px)'>
            <img src={"http://localhost:4000/images/"+product.image} alt="" className="productimage-main-img" />
        </Hide>
            <Show breakpoint='(max-width: 780px)'>
            <img src={"http://localhost:4000/images/"+product.image} alt="" className="productimage-main-img" height="450px" />
            <HStack width={{base:"100%"}}>
              <Box mt="10px"><img src={"http://localhost:4000/images/"+product.image} alt="product_img" /></Box>
              <Box mt="10px"><img src={"http://localhost:4000/images/"+product.image} alt="product_img" /></Box>
              <Box mt="10px"><img src={"http://localhost:4000/images/"+product.image} alt="product_img" /></Box>
              <Box mt="10px"><img src={"http://localhost:4000/images/"+product.image} alt="product_img" /></Box>
            </HStack>
            </Show>
        </Box>
        <Box w={{base:"60%",md:"55rem",lg:"55rem",xl:"55rem"}} margin="0px 15px" p="10px">
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
          <Box className="productdisplay-right-sizes" gap={{base:"10px",md:"20px",lg:"20px",xl:"20px"}}>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </Box>
        </Box>
        <Button bg="#ffb500 !important">Buy Now</Button><br />
        <Button marginTop={{base:"-20px",md:"20px",lg:"20px",xl:"20px"}}  marginBottom="40px" onClick={handleCheckAuth}>Add to Cart</Button>
        <p className="productdisplay-right-category"><span>Category :</span>Women, T-shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>
        </Box>
    </Box>
    <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss closeButton={true} draggable pauseOnHover containerId={"friendRequest"}/>
    </>
    
  );
};

export default ProductDisplay;