import React from "react";
import './Hero.css';
import { Box } from "@chakra-ui/react";
import Banner from "../Banner/Banner";

const Hero = () => {
    var head={
        w:{base:"100%",md:"100%",lg:"100%",xl:"100% !important"},
        padding:{base:"0px 0px 10px 0px",md:"0px 0px 10px 0px",lg:"0px 0px 10px 0px",xl:"10px 8% 10px 8%"}
    };
    return ( 
      <Box className="hero" {...head}>
            <Banner />
      </Box>
    )
}

export default Hero;
