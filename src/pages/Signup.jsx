import React from "react";
import { useState,useEffect } from 'react';
import "./CSS/Signup.css";

const Signup = () => {
    return (
    <div className="loginsignup">
        <div className="loginsignup-container">
            <h1>Sign Up</h1>
            <div className="loginsignup-fields">
                <input type="text" placeholder="Your Name"/>
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <input type="confirmpassword" placeholder="confirm password" />
            </div>
            <button>Continue</button>
            <p className="loginsignup-login">Already have an account? <span><a href="/login">Login here</a></span></p>
            <div className="loginsignup-agree">
                <input type="checkbox" name="" id=""/>
                <p>By continuing, i agree to the terms of use & privacy</p>
            </div>
        </div>

    </div>
    )
}
 
export default Signup;