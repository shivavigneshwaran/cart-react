import React from "react";
import './NewsLetter.css';
import {FormControl,FormLabel,FormErrorMessage,FormHelperText, Heading,Text,Input,Button,Box} from '@chakra-ui/react'

const NewsLetter=()=>{
    var formres={
        gap:{base:"20px",md:"25px",lg:"30px",xl:"30px"},
        p:{base:"75px 25px",md:"100px 140px",lg:"100px 140px",xl:"100px 140px"}
    }

    var head={
        fontSize:{base:"23px",md:"x-large",lg:"xx-large",xl:"xx-large"}
    }

    var headtext={
        fontSize:{base:"17px !important",md:"x-large",lg:"xx-large",xl:"xx-large"}
    }

    var emailtext={
        w:{base:"100% !important",md:"60%",lg:"65% !important",xl:"65% !important"},
        h:{base:"50px !important",md:"auto",lg:"60px",xl:"60px"}
    }
    
    var subbtn={
        _hover:{bg:"#001259"},
        h:{base:"50px !important",md:"auto",lg:"auto",xl:"auto"}
    }

    return(
        <FormControl className="newsletter" {...formres}>
            <Heading {...head}>Get Exclusive Offers on Your Email</Heading>
            <Text cs="p" {...headtext}>Subscribe to our newsletter and stay updated</Text>
            <Box {...emailtext}>
                <Input type='email' h={{base:"40px !important",md:"auto",lg:"auto",xl:"auto"}} />
                <Button type='submit' {...subbtn}>Subscribe</Button>
            </Box>
        </FormControl>
       
    )
}

export default NewsLetter;