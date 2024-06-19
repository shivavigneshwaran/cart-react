import React from "react";
import { useState, useEffect } from "react";
import "./CSS/Cart.css";
import {
  Box,
  Card,
  CardHeader,
  CardFooter,
  Heading,
  CardBody,
  Stack,
  Input,
  Button,
  Text,
  GridItem,
  Grid,
  Divider,
  HStack,
  VStack,
  Image,
  IconButton,
  Flex,
  Hide,
  Show
} from "@chakra-ui/react";

import { AddIcon, MinusIcon, DeleteIcon } from "@chakra-ui/icons";

import paypal from "../Components/Assets/paypal.png";
import visa from "../Components/Assets/visa.png";
import mastercard from "../Components/Assets/mastercard.png";
import AmericanExpress from "../Components/Assets/American_Express_logo.png";
import { productCartDataManage,productCartDataDecrease } from "../redux/ProductCountReducer";
import {useDispatch,useSelector} from "react-redux";
import { Link,useNavigate  } from 'react-router-dom';


const Cart = ({ productCount, cart }) => {
  const navigate = useNavigate();
  const count = productCount;
  const [productData, setProductData] = useState([]);
  const dispatch = useDispatch();
  const total = useSelector((state) => state?.productCount?.total);



  function getData() {
    let cartData = cart;
    

    setProductData(cartData);
  }


  const addData = (item)=>{
    
    dispatch(productCartDataManage(item));
    

  }

  const decreaseData = (item) => {
   
    dispatch(productCartDataDecrease(item));
    

  }

 

  

  useEffect(() => {
    getData();
    
  }, []);

  useEffect(() => {
    getData();
  }, [count]);




  return (
    <Box m={{base:"0px 0px",md:"5px 10px",lg:"10px 50px",xl:"10px 50px"}} bgGradient="linear-gradient(180deg, #ecf4ff, #e1ffea 70%)">
      <Grid
        h={"auto"}
        templateRows={{base:"repeat(1, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(3, 1fr)",xl:"repeat(3, 1fr)"}}
        templateColumns={{base:"repeat(1, 1fr)",md:"repeat(1, 1fr)",lg:"repeat(3, 1fr)",xl:"repeat(3, 1fr)"}}
        gap={8}
        p={{base:"0px",md:"25px",lg:"25px",xl:"25px"}}
      >
        <GridItem rowSpan={3} colSpan={2}>
          <Card h={"auto"} borderRadius={"20px"} variant={"outline"}>
            <CardHeader>
              <Heading size="md">Shopping Cart</Heading>
            </CardHeader>
            <Divider />
            <CardBody>
              <VStack spacing={4} align="stretch" width="100%">
                {/* Header Row */}
                <Hide breakpoint='(max-width: 780px)'>
                  <HStack spacing={6} p={4} alignItems="center" width="100%">
                    <Text flex="1" fontWeight="bold">Product</Text>
                    <Text flex="0.6" textAlign="center" fontWeight="bold">Unit Price</Text>
                    <Text flex="0.6" textAlign="center" fontWeight="bold">Quantity</Text>
                    <Text flex="0.6" textAlign="center" fontWeight="bold">Total Price</Text>
                    <Text flex="0.1"></Text>
                  </HStack>
                
                {/* Divider */}
                  <HStack width="100%">
                    <Divider borderColor="gray.300" opacity="0.5" />
                  </HStack>
                </Hide>
                {/* Product Rows Container with overflowY */}
                <Box overflowY={"auto"} maxH={"350px"} width="100%">
                  <VStack spacing={4} align="stretch" width="100%">
                    {productData.map((item, index) => (
                      <HStack
                        key={index}
                        spacing={6}
                        p={4}
                        borderWidth="1px"
                        borderRadius="lg"
                        alignItems="center"
                        width="100%"
                        flexDirection={{base:"column",md:"row",lg:"row",xl:"row"}}
                      >
                        <HStack flex="1" spacing={4}>
                          <Image boxSize={"100px"} borderRadius={"10px"} src={"https://localhost-44v9.onrender.com/images/" + item.image} />
                          <VStack align="start">
                            <Text fontWeight="bold">{item.name}</Text>
                            <Text>Color: {item.color}</Text>
                          </VStack>

                        </HStack>
                        <Show breakpoint='(max-width: 780px)'>
                        <HStack gap="40px">
                            <Text flex="0.5" textAlign="center" fontWeight="700">₹{item?.new_price?.toFixed(2)}</Text>
                            <HStack flex="0.5" justifyContent="center">
                                <IconButton
                                  aria-label="Decrease quantity"
                                  icon={<MinusIcon />}
                                  size="sm"
                                  bg="teal.500"
                                  color="white"
                                  borderRadius="full"
                                  _hover={{ bg: "teal.600" }}
                                  _active={{ bg: "teal.700" }} 
                                  onClick={()=>decreaseData(item)}
                                />
                                <Input
                                  value={item.quantity}
                                  readOnly
                                  width="50px"
                                  textAlign="center"
                                  size="sm"
                                />
                                <IconButton
                                  aria-label="Increase quantity"
                                  icon={<AddIcon />}
                                  size="sm"
                                  bg="teal.500"
                                  color="white"
                                  borderRadius="full"
                                  _hover={{ bg: "teal.600" }}
                                  _active={{ bg: "teal.700" }}
                                  onClick={()=>{addData(item)}
                                  }
                                />
                              </HStack>

                               {/*  <Text flex="0.5" textAlign="center" fontWeight="700">₹{(item.new_price * item.quantity).toFixed(2)}</Text>*/}

                              <IconButton flex="0.1" icon={<DeleteIcon />} />
                              </HStack>
                          </Show>
                        <Hide breakpoint='(max-width: 780px)'>
                        <Text flex="0.5" textAlign="center" fontWeight="700">₹{item?.new_price?.toFixed(2)}</Text>

                        <HStack flex="0.5" justifyContent="center">
                          <IconButton
                            aria-label="Decrease quantity"
                            icon={<MinusIcon />}
                            size="sm"
                            bg="teal.500"
                            color="white"
                            borderRadius="full"
                            _hover={{ bg: "teal.600" }}
                            _active={{ bg: "teal.700" }}
                            onClick={()=>decreaseData(item)}
                          />
                          <Input
                            value={item.quantity}
                            readOnly
                            width="50px"
                            textAlign="center"
                            size="sm"
                          />
                          <IconButton
                            aria-label="Increase quantity"
                            icon={<AddIcon />}
                            size="sm"
                            bg="teal.500"
                            color="white"
                            borderRadius="full"
                            _hover={{ bg: "teal.600" }}
                            _active={{ bg: "teal.700" }}
                            onClick={()=>{addData(item)}
                            }
                          />
                        </HStack>

                        <Text flex="0.5" textAlign="center" fontWeight="700">₹{(item.new_price * item.quantity).toFixed(2)}</Text>

                        <IconButton flex="0.1" icon={<DeleteIcon />} />
                        </Hide>
                      </HStack>
                      
                    ))}
                  </VStack>
                </Box>
              </VStack>
            </CardBody>
            <CardFooter>
              <HStack>
                <Button background={"#ffff"} textColor={"black"}>Back</Button>
                <Button background={"#ff4141"} textColor={"#ffff"}>Cancel Order</Button>
              </HStack>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem colSpan={{base:2,md:1,lg:1,xl:1}}>
          <Card size={"sm"} borderRadius={"20px"}>
            <CardHeader>
              <Heading size="md">Coupon Code</Heading>
            </CardHeader>
            <Divider borderColor="gray.300" opacity="0.5" />
            <CardBody>
              <VStack gap={5}>
                <Input placeholder="Enter Coupon Code" variant="filled" _focus={{ boxShadow: "none" }} />
                <Button w={"100%"} backgroundColor={"white"} variant={"outline"} textColor={"#319795"}>Apply Your Coupon</Button>
              </VStack>
            </CardBody>
            <CardFooter>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem colSpan={{base:2,md:1,lg:1,xl:1}}>
          <Card size={"sm"} borderRadius={"20px"}>
            <CardHeader>
              <Heading size="md">Order Summary</Heading>
            </CardHeader>
            <Divider borderColor="gray.300" opacity="0.5" />
            <CardBody>
              <VStack align="stretch" >
                <HStack  justifyContent="space-between">
                  <Text  fontSize='md' textColor={"#989ca1"} >Discount</Text>
                  <Text  fontSize='sm' fontWeight="600">₹00.00</Text>
                </HStack>
                <HStack  justifyContent="space-between">
                  <Text  fontSize='md' textColor={"#989ca1"}>Delivery</Text>
                  <Text  fontSize='sm' fontWeight="600">₹29.99</Text>
                </HStack>
                <HStack  justifyContent="space-between">
                  <Text  fontSize='md' textColor={"#989ca1"}>Tax</Text>
                  <Text  fontSize='sm' fontWeight="600">₹39.99</Text>
                </HStack>
                <HStack  justifyContent="space-between">
                  <Text  fontSize='md' textColor={"#989ca1"}>Total</Text>
                  <Text  fontSize='lg' fontWeight="700" >₹{total}</Text>
                </HStack>
              </VStack>
            </CardBody>
            <CardFooter>
             
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem colSpan={{base:2,md:0.5,lg:1,xl:1}} marginBottom={{base:"10px"}}>
          <Card size={"sm"} borderRadius={"20px"}>
            <CardHeader>
              <Heading size="md">Payment Method</Heading>
            </CardHeader>
            <Divider borderColor="gray.300" opacity="0.5" />
            <CardBody>
              <VStack>
                <HStack gap={"10px"} p={"0px 20px"}>
                  <Image boxSize={"50px"} src={paypal} borderRadius={"10px"} />
                  <Image boxSize={"50px"} src={visa} borderRadius={"10px"} />
                  <Image boxSize={"50px"} src={mastercard} borderRadius={"10px"} />
                  <Image boxSize={"50px"} src={AmericanExpress} borderRadius={"10px"} />
                </HStack>
              </VStack>
            </CardBody>
            <CardFooter>
              <Button w={"100%"} colorScheme="blue" onClick={()=>navigate('/stepper')}>Check Out</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Cart;
