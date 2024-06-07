import React from "react";
import { useState,useEffect } from 'react';
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png"
import './Hero.css';
import { Box ,Card,CardHeader,Heading,CardBody,Stack,Text,StackDivider, HStack, Button,SimpleGrid} from "@chakra-ui/react";

const Hero = () => {
    return ( 
      <Box className="hero" >
      <SimpleGrid templateColumns={{base:'repeat(2, minmax(100px, 1fr))',md:'repeat(2, minmax(150px, 1fr))',lg:'repeat(2, minmax(200px, 1fr))',xl:'repeat(2, minmax(250px, 1fr))'}}gap="10px" >
          <Box display="flex" justifyContent={{base:"none",md:"center",lg:"center",xl:"center"}} alignItems="center"> 
              <Stack p="10px" position="relative" top={{base:"10px",md:"30px",lg:"30px",xl:"0px"}} left={{base:"10px",md:"80px",lg:"80px",xl:"130px"}}>  
                  <Heading textTransform='uppercase' fontSize={{base:"x-large",md:"35px",lg:"35px",xl:"35px"}}>New Arraivals</Heading>
                  <HStack><Text>New</Text> <img src={hand_icon} style={{width:"105px"}} className="hero-hand-icon" /></HStack>
                  <Text cs="p">Collections</Text>
                  <Text cs="p">for Everyone</Text>
                  <Button _hover={{bg:"#001259"}} w={{base:"250px",md:"320px",lg:"380px",xl:"400px"}}marginBottom={{base:"40px",md:"40px",lg:"40px"}}>Latest Collection <img src={arrow_icon}/></Button>
              </Stack>
          </Box>
          <Box display="flex" justifyContent="center">
              <img src={hero_image} style={{maxWidth:"50%"}} />
          </Box>
      </SimpleGrid>
      </Box>
    )
}

export default Hero;
