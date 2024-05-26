import React from "react";
import './Offers.css';
import exc_img from '../Assets/exclusive_image.png';
import { Box, Button, Heading, SimpleGrid,Stack,Text } from "@chakra-ui/react";

const Offers=() =>{
    return(
        <Box className="offer" >
            <SimpleGrid templateColumns='repeat(2, minmax(250px, 1fr))'gap="20px" >
                <Box display="flex" justifyContent="center" alignItems="center"> 
                    <Stack p="10px">  
                        <Heading>Exclusive</Heading>
                        <Heading>Offers For You</Heading>
                        <br />
                        <Text as="p">ONLY ON BEST SELLERS PRODUCTS</Text>
                        <Button mt="5px" _hover={{bg:"#001259"}}>Check Now</Button>
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