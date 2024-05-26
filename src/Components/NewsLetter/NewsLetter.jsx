import React from "react";
import './NewsLetter.css';
import {FormControl,FormLabel,FormErrorMessage,FormHelperText, Heading,Text,Input,Button,Box} from '@chakra-ui/react'

const NewsLetter=()=>{
    return(
        <FormControl className="newsletter">
            <Heading>Get Exclusive Offers on Your Email</Heading>
            <Text cs="p">Subscribe to our newsletter and stay updated</Text>
            <Box >
                <Input type='email'/>
                <Button type='submit' _hover={{bg:"#001259"}}>Subscribe</Button>
            </Box>
        </FormControl>
       
    )
}

export default NewsLetter;