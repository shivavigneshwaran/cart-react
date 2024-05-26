import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { Box,SimpleGrid,Card,CardBody, VStack, Heading, Flex, Text, Button} from "@chakra-ui/react";

const ProductDisplay = (props) => {
  const { product } = props;
  console.log("product", product);
  return (
    <Box className="Productdisplay"  >
        <VStack width="8rem">
            <Box mt="10px"><img src={product.image} alt="product_img" /></Box>
            <Box mt="10px"><img src={product.image} alt="product_img" /></Box>
            <Box mt="10px"><img src={product.image} alt="product_img" /></Box>
            <Box mt="10px"><img src={product.image} alt="product_img" /></Box>
        </VStack>
        <Box w="25rem" padding="10px">
            <img src={product.image} alt="" className="productimage-main-img" />
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
        <Button>Add to Cart</Button>
        <p className="productdisplay-right-category"><span>Category :</span>Women, T-shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>
        </Box>
    </Box>
  );
};

export default ProductDisplay;
