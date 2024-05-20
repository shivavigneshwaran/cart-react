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
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit(formSubmit)}>
                    <div className="loginsignup-fields">
                        <input type="text" placeholder="Your Name" {...register('name')} />
                        <div><span className="error-message">{errors.name?.message}</span></div>
                        <input type="email" placeholder="Email Address" {...register('email')} />
                        <div><span className="error-message">{errors.email?.message}</span></div>
                        <input type="password" placeholder="Password" {...register('password')} />
                        <div><span className="error-message">{errors.password?.message}</span></div>
                        <input type="password" placeholder="Confirm Password" {...register('confirmPassword')} />
                        <div><span className="error-message">{errors.confirmPassword?.message}</span></div>
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? <center><BiLoaderCircle className="spinner" /></center> : 'Continue'}
                    </button>
                </form>
                
                <p className="loginsignup-login">Already have an account? <span><a href="/login">Login here</a></span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, I agree to the terms of use & privacy</p>
                </div>
            </div>
           
        </div>
         <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </>
        
        
    )
}

export default Signup;
