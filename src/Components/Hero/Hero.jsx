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
      <SimpleGrid templateColumns='repeat(2, minmax(250px, 1fr))'gap="10px" >
          <Box display="flex" justifyContent="center" alignItems="center"> 
              <Stack p="10px" position="relative" top="-20px" left="80px">  
                  <Heading size='xs' textTransform='uppercase'>New Arraivals</Heading>
                  <HStack><Text>New</Text> <img src={hand_icon} style={{width:"105px"}} className="hero-hand-icon" /></HStack>
                  <Text cs="p">Collections</Text>
                  <Text cs="p">for Everyone</Text>
                  <Button _hover={{bg:"#001259"}}>Latest Collection <img src={arrow_icon}/></Button>
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
