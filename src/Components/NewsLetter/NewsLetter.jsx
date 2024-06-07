import React from "react";
import './NewsLetter.css';
import {FormControl,FormLabel,FormErrorMessage,FormHelperText, Heading,Text,Input,Button,Box} from '@chakra-ui/react'

const NewsLetter=()=>{
    return(
        <FormControl className="newsletter" gap={{base:"20px",md:"25px",lg:"30px",xl:"30px"}} p={{base:"75px 25px",md:"100px 140px",lg:"100px 140px",xl:"100px 140px"}}>
            <Heading fontSize={{base:"23px",md:"x-large",lg:"xx-large",xl:"xx-large"}}>Get Exclusive Offers on Your Email</Heading>
            <Text cs="p" fontSize={{base:"17px !important",md:"x-large",lg:"xx-large",xl:"xx-large"}}>Subscribe to our newsletter and stay updated</Text>
            <Box w={{base:"100% !important",md:"60%",lg:"65% !important",xl:"65% !important"}} h={{base:"50px !important",md:"auto",lg:"60px",xl:"60px"}}>
                <Input type='email' h={{base:"40px !important",md:"auto",lg:"auto",xl:"auto"}} />
                <Button type='submit' _hover={{bg:"#001259"}} h={{base:"50px !important",md:"auto",lg:"auto",xl:"auto"}}>Subscribe</Button>
            </Box>
        </FormControl>
       
    )
}

export default NewsLetter;