import React from "react";
import { useState,useEffect } from 'react';
import "./CSS/Login.css";

const LogIn = () => {
    return (
    <div className="login">
        <div className="login-container">
            <h1>Login</h1>
            <div className="login-fields">
                <input type="text" placeholder="Your Name"/>
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
            </div>
            <button>Continue</button> 
            <p className="login-login">Create an Account ? <span><a href="/register">Register here</a></span></p>
            <div className="login-agree">
                <input type="checkbox" name="" id=""/>
                <p>By continuing, i agree to the terms of use & privacy</p>
            </div>
        </div>

    </div>
    )
}
 
export default LogIn;