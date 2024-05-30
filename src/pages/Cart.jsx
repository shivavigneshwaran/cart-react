import React from "react";
import { useState,useEffect,useContext } from 'react';
import './CSS/Cart.css';
import { Box,Card,CardHeader,Heading,CardBody,Stack ,Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer, Input, Button,FormLabel, Spacer, Flex,} from "@chakra-ui/react";
import { ShopContext } from "../Context/ShopContext";


const Cart = () => {
    const all_product = useContext(ShopContext);
    const product = all_product.all_product.find((data) => data.id === Number(2));
    return (
        <Box>
            <Card>
                <CardHeader>
                    <Heading size='md'>SHOPING CART</Heading>
                </CardHeader>
                    <CardBody>
                    <TableContainer>
                        <Table size='sm'>
                            <Thead>
                            <Tr>
                                <Th textAlign="center">Image</Th>
                                <Th>Product</Th>
                                <Th>Price</Th>
                                <Th>Quantity</Th>
                                <Th>Total</Th>
                                <Th>Remove</Th>
                            </Tr>
                            </Thead>
                            <Tbody>
                            <Tr h="100px">
                                <Td w="120px"><img src={product.image}/></Td>
                                <Td>{product.name}<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet
          optio, quis enim officia iusto perferendis. Nisi dolorum quaerat nemo
          eaque, nostrum enim ea necessitatibus soluta magni dolorem ipsum
          explicabo!.</Td>
                                <Td>${product.new_price}</Td>
                                <Td><Input type="number" min="1"/></Td>
                                <Td>${product.new_price}</Td>
                                <Td><Button>Remove</Button></Td>
                            </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </CardBody>
            </Card>
            <Box padding="30px" display="flex" flexDirection="column" alignItems="flex-end" alignContent="stretch">
                <Box padding="10px">
                    <Flex><FormLabel>SubTotal:</FormLabel><Box cs="div">71.97</Box></Flex>
                    <Flex><FormLabel>Tax:</FormLabel><Box cs="div">1</Box></Flex>
                    <Flex><FormLabel>Delivery Charge:</FormLabel><Box cs="div">50</Box></Flex>
                    <Flex><FormLabel>Total:</FormLabel><Box cs="div">120</Box></Flex>
                    <Button bg="#ff4141" w="100%" h="55px"color="#fff"mt="30px"p="10px"fs="24px"fw="500"cursor="pointer"  _hover={{bg:"#076f15"}}>Buy Now</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Cart;