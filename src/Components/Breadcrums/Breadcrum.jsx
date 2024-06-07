import React from "react";
import arrow_icon from '../Assets/breadcrum_arrow.png';
import './Breadcrum.css';
import { Box } from "@chakra-ui/react";


const Breadcrum = (props) => {
    const {product} = props;
    return <Box className="breadcrum" m={{base:"20px 20px",md:"20px 55px;",lg:"30px 90px",xl:"60px 170px"}}>
        HOME <img src={arrow_icon} alt="arrow_icon" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name} <img src={arrow_icon} alt="" />
    </Box>
}

export default Breadcrum;