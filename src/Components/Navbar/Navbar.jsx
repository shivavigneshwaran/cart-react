import React from 'react';
import { useState,useEffect,useContext } from 'react';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon_white.png'
import { Link,useNavigate  } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import { FaUser } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { TbMoodKid } from "react-icons/tb";
import "./Navbar.css";
// import { Avatar, Box, Button, CardHeader, Center, Flex, HStack, Heading, List, ListItem, Spacer,Text } from '@chakra-ui/react';
import {useDispatch,useSelector} from "react-redux";
import { HamburgerIcon,Search2Icon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/react';
import { Avatar, Box, Button, CardHeader, Center, Flex, HStack, Heading, List, ListItem, Spacer,Text,Show,Hide, Menu,MenuButton,MenuList,MenuItem,MenuItemOption,MenuGroup,MenuOptionGroup,MenuDivider,Input,InputGroup,InputRightElement } from '@chakra-ui/react';
import {Popover,PopoverTrigger,PopoverContent,Stack,PopoverHeader,PopoverBody,PopoverFooter,PopoverArrow,PopoverCloseButton,PopoverAnchor} from '@chakra-ui/react'




const Navbar = ({productCount}) =>{
    const [menu,setMenu] = useState("shop");
    const [active,setactive]=useState("none");
    const { isAuthenticated,logout } = useContext(AuthContext);
    const count = productCount;

    const user=JSON.parse(localStorage.getItem("user"));
    console.log(user);
    const navigate = useNavigate();
    const toast = useToast();
    const handleicon = ()=>{
        {active =="none" ? setactive("block"):setactive("none")};
    }
    const handleLogout = ()=>{
        logout();
        navigate('/'); 
        toast({
            title: 'Logout successfully!',
            status: 'success',
            duration: 5000,
            position:'top-right',
            isClosable: true,
            variant: 'solid',
          })
    }
    return (
        <Flex as="nav"  p="4px" alignItems="center" w="100%" bg="#319795" color="#fff" position="sticky" top="0" zIndex="1000">
            <Box>
                <HStack ml={{ base:"5px",lg:"5px",xl:"30px"}}>
                <img src={logo} alt="logo" /><Heading fontSize={{base:"25px",lg:"30px"}}>SHOPPEr</Heading>
                </HStack>
            </Box>
            <Spacer />
            <Hide breakpoint='(max-width: 780px)'>
            <Box w={{md:"30%",lg:"50%",xl:"30%"}} p="10px" >
                <List flexDirection="row">
                <HStack spacing={{md:"10%",lg:"15%",xl:"15%"}} fontSize="large" fontWeight="600">
                    <ListItem onClick={()=>{setMenu("shop")}}  _hover={{ fontWeight: 'bold', textDecoration:'underline' }}><Link to={'/'}>Shop</Link></ListItem>
                    <ListItem onClick={()=>{setMenu("men")}} _hover={{ fontWeight: 'bold', textDecoration:'underline' }}><Link to={'/mens'}>Men</Link></ListItem>
                    <ListItem onClick={()=>{setMenu("women")}} _hover={{ fontWeight: 'bold', textDecoration:'underline' }}><Link to={'/womens'}>Women</Link></ListItem>
                    <ListItem onClick={()=>{setMenu("kids")}} _hover={{ fontWeight: 'bold', textDecoration:'underline' }}><Link to={'/kids'}>Kids</Link></ListItem>
                </HStack>
                </List>
            </Box>
            </Hide>
            <Spacer />
            <Box>
                <HStack mr={{base:"10px",md:"0px",lg:"30px",xl:"30px"}} gap={{base:"15px",md:"15px",lg:"30px",xl:"30px"}}>
                <Hide breakpoint='(max-width: 860px)'>
                <Stack w={{md:"60%"}}> 
                    <InputGroup>
                        <Input placeholder='Search...' background="#fff" color="black" />
                        <InputRightElement>
                            <Search2Icon color="black" />
                        </InputRightElement>
                    </InputGroup>
                </Stack>
                </Hide>
                {isAuthenticated && (<><Link to={'/cart'}><img src={cart_icon} alt='cart_logo'/></Link>
                    <div className='nav-cart-count'>{count}</div></>)}
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
                </Popover>: <Hide breakpoint='(max-width: 780px)'><Link to={'/login'}><Button bg="#319795" color="#fff" fontWeight="600" border="1px solid" _hover={{ fontWeight: 'bold', textDecoration:'underline',bg:"#319795" }}>Login</Button></Link></Hide>}
                <Show breakpoint='(max-width: 780px)'>
                    <Menu  _hover={{background:"#319795 !important"}}>
                        <MenuButton as={Button} bg="#319795" color="#fff" border="1px solid" fontSize="25px">
                            <HamburgerIcon mt="-5px" />
                        </MenuButton>
                        <MenuList color="#319795">
                            <MenuItem onClick={()=>{setMenu("shop")}}><Link to={'/'}><Flex p="5px">Shop<FaUser style={{marginTop:"3px",marginLeft:"10px"}} /></Flex></Link></MenuItem>
                            <MenuItem onClick={()=>{setMenu("men")}} ><Link to={'/mens'}><Flex p="5px">Men<FaUser style={{marginTop:"3px",marginLeft:"10px"}} /></Flex></Link></MenuItem>
                            <MenuItem onClick={()=>{setMenu("women")}}><Link to={'/womens'}><Flex p="5px">Women<FaUser style={{marginTop:"3px",marginLeft:"10px"}} /></Flex></Link></MenuItem>
                            <MenuItem onClick={()=>{setMenu("kids")}}><Link to={'/kids'}><Flex p="5px">Kids <TbMoodKid style={{marginTop:"3px",marginLeft:"10px"}} /></Flex></Link></MenuItem>
                            <MenuItem><Link to={'/login'}><Flex p="5px">Login<LuLogIn style={{marginTop:"3px",marginLeft:"10px"}} /></Flex></Link></MenuItem>
                        </MenuList>
                    </Menu>
                </Show>
                </HStack>
            </Box>
        </Flex> 
    )
}

export default Navbar;
