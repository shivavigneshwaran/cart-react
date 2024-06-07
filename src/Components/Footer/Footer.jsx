import React from "react";
import "./footer.css";
import footer_logo from '../Assets/logo_big.png';
import insta_icon from '../Assets/instagram_icon_white.png';
import pins_icon from '../Assets/pintester_icon_white.png';
import wp_icon from '../Assets/whatsapp_icon_white.png';
import { Link,useNavigate  } from 'react-router-dom';
import { Container, HStack, ListItem, Stack,Box,Text,List, Spacer } from "@chakra-ui/react";


const Footer=()=>{
    return(
        <Box as="footer" maxW="100%" bg="#319795" color="white" fontWeight="600" p="20px">
            <Container justifyContent="center" display="grid">
                <Box justifyContent="center" display="flex">
                    <HStack ml="-10px">
                        <img src={footer_logo} alt="" /><p style={{fontWeight:"bold",color:"#fff"}}>SHOPPER</p>
                    </HStack>
                </Box>
                <Box>
                    <List>
                        <HStack gap="10px">
                            <ListItem _hover={{ fontWeight: 'bold', textDecoration:'underline'}}><Link to={'/'}>Company</Link></ListItem>
                            <ListItem _hover={{ fontWeight: 'bold', textDecoration:'underline'}}><Link to={'/'}>Products</Link></ListItem>
                            <ListItem _hover={{ fontWeight: 'bold', textDecoration:'underline'}}><Link to={'/'}>Offices</Link></ListItem>
                            <ListItem _hover={{ fontWeight: 'bold', textDecoration:'underline'}}><Link to={'/'}>About</Link></ListItem>
                            <ListItem _hover={{ fontWeight: 'bold', textDecoration:'underline'}}><Link to={'/'}>Contact</Link></ListItem>
                        </HStack>
                    </List>
                </Box>
                <Box padding="10px" mb="10px" justifyContent="center" display="flex">
                    <Stack direction="row"><Link to={'/'}><img src={insta_icon} alt="" style={{width:"35px"}}/></Link> <Link to={'/'}><img src={pins_icon} alt="" style={{width:"35px"}}/></Link><Link to={'/'}><img src={wp_icon} alt="" style={{width:"35px"}}/></Link></Stack>
                </Box>
                <Box>
                <hr />
                <Text mt="10px" textAlign="center" color="#fff" fontSize="14px">Copyright @2023 - All Right Reserved</Text>
            </Box>    
            </Container>
        </Box>
    )
}

export default Footer;