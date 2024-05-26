import React from 'react';
import { useState,useEffect,useContext } from 'react';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon_white.png'
import { Link,useNavigate  } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import { FaUser } from "react-icons/fa";
import "./Navbar.css";
import { Avatar, Box, Button, CardHeader, Center, Flex, HStack, Heading, List, ListItem, Spacer,Text } from '@chakra-ui/react';
import {Popover,PopoverTrigger,PopoverContent,PopoverHeader,PopoverBody,PopoverFooter,PopoverArrow,PopoverCloseButton,PopoverAnchor} from '@chakra-ui/react'



const Navbar = () =>{
    const [menu,setMenu] = useState("shop");
    const [active,setactive]=useState("none");
    const { isAuthenticated,logout } = useContext(AuthContext);
    const user=JSON.parse(localStorage.getItem("user"));
    console.log(user);
    const navigate = useNavigate();
    const handleicon = ()=>{
        {active =="none" ? setactive("block"):setactive("none")};
    }
    const handleLogout = ()=>{
        logout();
        navigate('/shop'); 
        toast.success('Logout successfully!');  
    }
    return (
        <Flex as="nav"  p="4px" alignItems="center" w="100%" bg="#319795" color="#fff" position="sticky" top="0" zIndex="1000">
            <Box>
                <HStack ml="30px">
                <img src={logo} alt="logo" /><Heading>SHOPPEr</Heading>
                </HStack>
            </Box>
            <Spacer />
            <Box w="30%" p="10px">
                <List flexDirection="row">
                <HStack spacing="70px" fontSize="large" fontWeight="600">
                    <ListItem onClick={()=>{setMenu("shop")}}  _hover={{ fontWeight: 'bold', textDecoration:'underline' }}><Link to={'/'}>Shop</Link></ListItem>
                    <ListItem onClick={()=>{setMenu("men")}} _hover={{ fontWeight: 'bold', textDecoration:'underline' }}><Link to={'/mens'}>Men</Link></ListItem>
                    <ListItem onClick={()=>{setMenu("women")}} _hover={{ fontWeight: 'bold', textDecoration:'underline' }}><Link to={'/womens'}>Women</Link></ListItem>
                    <ListItem onClick={()=>{setMenu("kids")}} _hover={{ fontWeight: 'bold', textDecoration:'underline' }}><Link to={'/kids'}>Kids</Link></ListItem>
                </HStack>
                </List>
            </Box>
            <Spacer />
            <Box>
                <HStack mr="30px" gap="30px">
                {isAuthenticated && (<><Link to={'/cart'}><img src={cart_icon} alt='cart_logo'/></Link>
                    <div className='nav-cart-count'>0</div></>)}
                {
                isAuthenticated ? 
                <Popover>
                    <PopoverTrigger><Avatar name={user?.name } src=''/></PopoverTrigger>
                    <PopoverContent color="#319795 !important" textAlign="center" fontSize="16px">
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody p="3px"><Text as="label">{user?.name}</Text></PopoverBody>
                        <PopoverBody p="3px"><Text as="label">{user?.email}</Text></PopoverBody>
                        <PopoverBody p="3px"><Button bg="#ecf4ff" width="50%" color="#319795" onClick={handleLogout}>Logout</Button></PopoverBody>
                    </PopoverContent>
                </Popover>: <Link to={'/login'}><Button bg="#319795" color="#fff" fontWeight="600" border="1px solid" _hover={{ fontWeight: 'bold', textDecoration:'underline',bg:"#319795" }}>Login</Button></Link>}
                </HStack>


            </Box>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={true} pauseOnFocusLoss draggable pauseOnHover />  
        </Flex> 
    )
}

export default Navbar;