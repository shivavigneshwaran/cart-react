import React from "react";
import { useState,useEffect,useContext } from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import "./CSS/Login.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { BiLoaderCircle } from "react-icons/bi";
import axios from "axios";
import { useToast } from '@chakra-ui/react'
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../Context/AuthContext';
import { Link,useNavigate  } from 'react-router-dom';
import { Box, FormControl, Heading,Input,Button, Container,Hide,Show } from "@chakra-ui/react";


// Define the validation schema
const schema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
}).required();

const LogIn = () => {
    const { login } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors,isSubmitting } } = useForm({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate();
    const toast = useToast();

    const formSubmit = async (data) => {
        try {
            const response = await axios.post('https://localhost-44v9.onrender.com/auth/login', data);
            console.log('response',response);
            if(response.data.status === "success"){
                const token = response.data.token;
                localStorage.setItem("user",JSON.stringify(response.data.user));
                login(token); 
                toast({
                    title: 'Login successful! 🎉',
                    status: 'success',
                    duration: 5000,
                    position:'top-right',
                    top:'30px !important',
                    isClosable: true,
                    variant: 'solid',
                  })
                setTimeout(() => {
                    navigate('/cart');
                }, 800);
               
            }
           
        } catch (error) {
            if (error.response && error.response.status === 400) {
                toast({
                    title: error.response.data.message,
                    status: 'error',
                    duration: 5000,
                    position:'top-right',
                    variant: 'solid',
                     isClosable: true,
                  })
            } else {
                toast({
                    title: 'Login failed. Please try again.',
                    status: 'error',
                    duration: 5000,
                    position:'top-right',
                    variant: 'solid',
                    isClosable: true,
                  })
            }
            
        }
    };
    return (
        <>
        <Box className="login">
           
        <Hide breakpoint='(max-width: 780px)'>
            <Container className="login-container">
            <form onSubmit={handleSubmit(formSubmit)}>
            <Heading cs="h2">LOGIN</Heading>
            <FormControl className="formcont">
                <Input placeholder='Your Name' id="name" name="name" {...register('name')} />
                <span className="error-message">{errors.name?.message}</span>
                <Input placeholder="Email Address" id="email" name="email" {...register('email')}/>
                <span className="error-message">{errors.email?.message}</span>
                <Input placeholder="Password" id="password" name="password" {...register('password')}/>
                <span className="error-message">{errors.password?.message}</span>
                <Button disabled={isSubmitting} _hover={{bg:"#076f15"}} type="submit">
                {isSubmitting ? <center><BiLoaderCircle className="spinner" /></center> : 'Continue'}
                </Button> 
            </FormControl>
            <Box padding="0px 0px 0px 40px" mt="-20px">
                <p className="login-login">Create an Account ? <span><Link to="/register">Register here</Link></span></p>
                <div className="login-agree">
                    <input type="checkbox" name="" id="" {...register('Accept the terms ans conditions')}/>
                    <p>By continuing, i agree to the terms of use & privacy</p>
                </div>
            </Box>
            </form>
            </Container>
        </Hide>
        <Show breakpoint='(max-width: 780px)'>
        <Box className="login-container" w="90%" padding="30px 20px">
            <form onSubmit={handleSubmit(formSubmit)}>
            <Heading cs="h2">LOGIN</Heading>
            <FormControl className="formcont">
                <Input placeholder='Your Name' id="name" name="name" {...register('name')} />
                <span className="error-message">{errors.name?.message}</span>
                <Input placeholder="Email Address" id="email" name="email" {...register('email')}/>
                <span className="error-message">{errors.email?.message}</span>
                <Input placeholder="Password" id="password" name="password" {...register('password')}/>
                <span className="error-message">{errors.password?.message}</span>
                <Button disabled={isSubmitting} _hover={{bg:"#076f15"}} type="submit">
                {isSubmitting ? <center><BiLoaderCircle className="spinner" /></center> : 'Continue'}
                </Button> 
            </FormControl>
            <Box padding="0px 0px 0px 40px" mt="-20px">
                <p className="login-login">Create an Account ? <span><Link to="/register">Register here</Link></span></p>
                <div className="login-agree">
                    <input type="checkbox" name="" id="" {...register('Accept the terms ans conditions')}/>
                    <p fontSize:"10px">By continuing, i agree to the terms of use & privacy</p>
                </div>
            </Box>
            </form>
            </Box>
        </Show>  
        </Box>
        </>
    
    )
}
 
export default LogIn;
