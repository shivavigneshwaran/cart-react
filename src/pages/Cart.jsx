import React from "react";
import { useState,useEffect } from 'react';
import './CSS/Cart.css';
import { Box,Card,CardHeader,Heading,CardBody,Stack ,Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer, Input, Button,FormLabel, Spacer, Flex,} from "@chakra-ui/react";

const Cart = () => {
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
                                <Td w="120px"><img src="https://s.cdpn.io/3/dingo-dog-bones.jpg"/></Td>
                                <Td>Dingo Dog Bones<br/>The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.</Td>
                                <Td>12.99</Td>
                                <Td><Input type="number" min="1"/></Td>
                                <Td>25.98</Td>
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