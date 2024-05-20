import React from "react";
import { useState,useEffect,useContext } from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import "./CSS/Login.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { BiLoaderCircle } from "react-icons/bi";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useNavigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';


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

    const formSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:4000/auth/login', data);
            console.log('response',response);
            if(response.data.status === "success"){
                const token = response.data.token;
                login(token);
                toast.success('Login successful! 🎉');  
                setTimeout(() => {
                    navigate('/cart');
                }, 800); // Adjust the delay as necessary
               
            }
           
        } catch (error) {
            if (error.response && error.response.status === 400) {
                console.log(error.response.data.message);
                toast.error(error.response.data.message);
            } else {
                console.log(error);
                toast.error('Registration failed. Please try again.');
            }
            
        }
    };
    return (
        <>
        <div className="login">
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit(formSubmit)}>
            <div className="login-fields">
                <input type="text" placeholder="Your Name" {...register('name')}/>
                <div><span className="error-message">{errors.name?.message}</span></div>
                <input type="email" placeholder="Email Address" {...register('email')}/>
                <div><span className="error-message">{errors.email?.message}</span></div>
                <input type="password" placeholder="Password" {...register('password')}/>
                <div><span className="error-message">{errors.password?.message}</span></div>
            </div>
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? <center><BiLoaderCircle className="spinner" /></center> : 'Continue'}
            </button> 
            </form>
            
            <p className="login-login">Create an Account ? <span><a href="/register">Register here</a></span></p>
            <div className="login-agree">
                <input type="checkbox" name="" id=""/>
                <p>By continuing, i agree to the terms of use & privacy</p>
            </div>
        </div>

    </div>
         <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </>
    
    )
}
 
export default LogIn;