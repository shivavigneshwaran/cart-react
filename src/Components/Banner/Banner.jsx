import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
import banner1 from "../Assets/Banner1blank1.jpg";
import banner2 from "../Assets/Banner2blank2.jpg";
import banner3 from "../Assets/banner3.jpg";
import './Banner.css';
import { Heading,Stack,Text, HStack, Button,SimpleGrid, Flex,Image} from "@chakra-ui/react";

const Banner=()=>{
    var settings = {
        className: "Slideclass",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      var sliderbtn={
        width:{base:"250px",md:"320px",lg:"250px",xl:"250px"},
        _hover:{bg:"#001259"},
        ml:"-10px"
      };
      var template={
        templateColumns:
            {
                base:'100%',
                md:'repeat(2, minmax(150px, 1fr))',
                lg:'repeat(2, minmax(200px, 1fr))',
                xl:'repeat(2, minmax(250px, 1fr))'
            },
        gap:"10px",
        height:"400px",
        backgroundRepeat:"no-repeat", 
        backgroundSize:"cover",
        backgroundPosition:"center"
      };
      var templatebox={
        justifyContent:{base:"none",md:"center",lg:"center",xl:"center"},
        alignItems:"center",
        height:"400px"
      };
      var bannerleft={
        p:"10px", 
        position:"relative",
        top:{base:"10px",md:"30px",lg:"0px",xl:"0px"},
        left:{base:"10px",md:"80px",lg:"80px",xl:"130px"},
        padding:{base:"50px 65px",md:"50px 0px",lg:"50px 0px",xl:"50px 0px"},
        height:"400px"
      };
      var bannerhead={
        textTransform:'uppercase',
        fontSize:{base:"x-large",md:"35px",lg:"35px",xl:"35px"}
      };
      var backposition={
        height:"400px",
        backgroundRepeat:"no-repeat", 
        backgroundSize:"cover",
        backgroundPosition:"center"
      };
    return(
        <Slider {...settings}>
        <div>
            <SimpleGrid {...template} backgroundImage={banner1}>
                <Flex {...templatebox}> 
                <Stack {...bannerleft}>  
                    <Heading {...bannerhead} fontSize="30px">New Arraivals</Heading>
                    <HStack mt={{base:"10px",md:"0px",lg:"0px",xl:"0px"}}><Text fontSize="25px" color="#fff !important" mt="15px">New</Text> <img src={hand_icon} style={{width:"60px"}} className="hero-hand-icon" alt="handimg" /></HStack>
                    <Text cs="p" fontSize="25px"  color="#fff !important">Collections for Everyone</Text>
                    <Button {...sliderbtn}>Latest Collection <img src={arrow_icon} alt="Bannerbtnimg" /></Button>
                </Stack>
                </Flex>
            </SimpleGrid>
        </div>
        
        <div>
            <SimpleGrid {...backposition} backgroundImage={banner2}>
                <Flex {...templatebox} width="100%" justifyContent={{base:"none",md:"none",lg:"none",xl:"none"}}> 
                <Stack {...bannerleft} padding="100px 100px">  
                    <Heading {...bannerhead} fontSize="30px">SPECIAL SALES</Heading>
                    <HStack><Text fontSize="25px" fontWeight="300 !important">30% OFF</Text></HStack>
                    <Text cs="p" fontSize="20px" fontWeight="300 !important">Bye 1 Get 1</Text>
                    <Button {...sliderbtn}>Order Now<img src={arrow_icon} alt="Bannerbtnimg" /></Button>
                </Stack>
                </Flex>
            </SimpleGrid>
        </div>
        
        

        <div>
            <SimpleGrid {...template} >
                <Flex {...templatebox}> 
                <Stack {...bannerleft} padding={{base:"80px 80px",md:"50px 0px",lg:"80px 0px",xl:"80px 0px"}}>  
                    <Heading {...bannerhead} fontSize="24px">Womens Collection</Heading>
                    <HStack><Text fontSize="25px" fontWeight="300 !important">New</Text> <img src={hand_icon} style={{width:"60px"}} className="hero-hand-icon" alt="handimg" /></HStack>
                    <Text cs="p" fontSize="25px" fontWeight="300 !important">Latest Collection for Womens</Text>
                    <Button {...sliderbtn}>Visit Collection <img src={arrow_icon} alt="Bannerbtnimg" /></Button>
                </Stack>
                </Flex>
                <Flex justifyContent="center" padding="0px 55px" display={{base:"none",md:"block",lg:"block",xl:"block"}}>
                    <Image src={hero_image} maxWidth={{base:"50%",md:"80%",lg:"60%",xl:"60%"}} alt="Bannerrightimg"/>
                </Flex>
            </SimpleGrid>
        </div>
        
      </Slider>
    )
}
export default Banner;
