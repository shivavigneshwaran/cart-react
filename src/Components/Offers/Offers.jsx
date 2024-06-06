import React from "react";
import './Offers.css';
import exc_img from '../Assets/exclusive_image.png';
import { Box, Button, Heading, SimpleGrid,Stack,Text } from "@chakra-ui/react";

const Offers=() =>{
    return(
        <Box className="offer" w={{base:"100%",md:"80%",lg:"70%",xl:"65%"}} p={{base:"30px 70px",md:"0px 60px",lg:"0px 80px",xl:"0px 110px"}}>
            <SimpleGrid templateColumns={{base:'repeat(2, minmax(180px, 1fr))',md:'repeat(2, minmax(200px, 1fr))',lg:'repeat(2, minmax(250px, 1fr))',xl:'repeat(2, minmax(250px, 1fr))'}}gap="20px" >
                <Box display="flex" justifyContent="center" alignItems="center"> 
                    <Stack pt={{base:"40px",md:"0px",lg:"0px",xl:"0px"}} w={{base:"100%"}}>  
                        <Heading fontSize={{base:"20px",md:"x-large",lg:"xx-large",xl:"xx-large"}}>Exclusive</Heading>
                        <Heading fontSize={{base:"20px",md:"x-large",lg:"xx-large",xl:"xx-large"}}>Offers For You</Heading>
                        <Text as="p" fontSize={{base:"11px",md:"15px",lg:"15px",xl:"17px"}}>ONLY ON BEST SELLERS PRODUCTS</Text>
                        <Button mt="5px" _hover={{bg:"#001259"}} w={{base:"190px",md:"240px",lg:"240px",xl:"240px"}} h={{base:"40px",md:"55px",lg:"55px",xl:"55px"}} fontSize={{base:"13px",md:"20px",lg:"20px",xl:"20px"}}>Check Now</Button>
                    </Stack>
                </Box>

                <Box>
                    <img src={exc_img} alt="exclusive image" style={{width:"80%"}} />
                </Box>
            </SimpleGrid>
        </Box>
    )
}

export default Offers;