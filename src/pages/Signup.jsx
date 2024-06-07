import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./CSS/Signup.css";
import { BiLoaderCircle } from "react-icons/bi";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useNavigate } from 'react-router-dom';
import { Box, FormControl, Heading,Input,Button, Container,Hide,Show,Text} from "@chakra-ui/react";

// Define the validation schema
const schema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required')
}).required();

const Signup = () => {
    const { register, handleSubmit, formState: { errors,isSubmitting } } = useForm({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate();

    const formSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:4000/auth/register', data);
            toast.success('Registration successful! 🎉');  
            setTimeout(() => {
                navigate('/cart');
            }, 500);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                toast.error('The User Is Already Existing');
            } else {
                console.log(error);
                toast.error('Registration failed. Please try again.');
            }
            
        }
    };
    

    return (
        <>
        <Box className="loginsignup">
        <Hide breakpoint='(max-width: 780px)'>
            <Container className="loginsignup-container">
            <form onSubmit={handleSubmit(formSubmit)}>
            <Heading cs="h1">REGISTER</Heading>
            <FormControl className="formcont">
                <Input placeholder='Your Name' id="name" name="name" {...register('name')} />
                <span className="error-message">{errors.name?.message}</span>
                <Input placeholder="Email Address" id="email" name="email" {...register('email')}/>
                <span className="error-message">{errors.email?.message}</span>
                <Input placeholder="Password" id="password" name="password" {...register('password')}/>
                <span className="error-message">{errors.password?.message}</span>
                <Input placeholder="Password" id="confirmpassword" name="password" {...register('password')}/>
                <span className="error-message">{errors.confirmpassword?.message}</span>
                <Button type="submit" disabled={isSubmitting} _hover={{bg:"#001259"}}>
                    {isSubmitting ? <center><BiLoaderCircle className="spinner" /></center> : 'Continue'}
                </Button> 
            </FormControl>
            <Box padding="0px 0px 0px 40px" mt="-20px">
                <p className="loginsignup-login">Already have an account? <span><a href="/login">Login here</a></span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, I agree to the terms of use & privacy</p>
                </div>
            </Box>
            </form>
            </Container>
        </Hide>
        <Show breakpoint='(max-width: 780px)'>
            <Box className="loginsignup-container" w="450px" padding="30px 20px">
                <Heading cs="h1">REGISTER</Heading>
                <FormControl className="formcont" onSubmit={handleSubmit(formSubmit)}>
                    <Input placeholder='Your Name' id="name" name="name" {...register('name')} />
                    <span className="error-message">{errors.name?.message}</span>
                    <Input placeholder="Email Address" id="email" name="email" {...register('email')}/>
                    <span className="error-message">{errors.email?.message}</span>
                    <Input placeholder="Password" id="password" name="password" {...register('password')}/>
                    <span className="error-message">{errors.password?.message}</span>
                    <Input placeholder="Password" id="confirmpassword" name="password" {...register('password')}/>
                    <span className="error-message">{errors.confirmpassword?.message}</span>
                    <Button type="submit" disabled={isSubmitting} _hover={{bg:"#001259"}}>
                        {isSubmitting ? <center><BiLoaderCircle className="spinner" /></center> : 'Continue'}
                    </Button> 
                </FormControl>
                <Box padding="0px 0px 0px 40px" mt="-20px">
                    <p className="loginsignup-login">Already have an account? <span><a href="/login">Login here</a></span></p>
                    <div className="loginsignup-agree">
                        <input type="checkbox" name="" id="" />
                        <Text fontSize="12px !important">By continuing, I agree to the terms of use & privacy</Text>
                    </div>
                </Box>
            </Box>
        </Show>
        </Box>
         <ToastContainer position="top-right" top="70px" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} closeButton={true} pauseOnFocusLoss draggable pauseOnHover />
        </>
        
        
    )
}

export default Signup;
