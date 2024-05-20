import React from 'react';
import { useState,useEffect,useContext } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link,useNavigate  } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
const Navbar = () =>{
    const [menu,setMenu] = useState("shop");
    const { isAuthenticated,logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = ()=>{
       
        logout();
        navigate('/login'); 
        toast.success('Logout successfully!');  
    }
    return (
        <>
        <div className='navbar'>
            <div className='nav-logo'>
            <img src={logo} alt="logo" />
            <p>Shopper</p>
            </div>
            <ul className="nav-menus">
                <li onClick={()=>{setMenu("shop")}}><Link to={'/'} style={{ textDecoration:"none" }}>Shop</Link> {menu === "shop" ? <hr/> : <></>}</li>
                <li onClick={()=>{setMenu("men")}}><Link to={'/mens'} style={{ textDecoration:"none" }}>Men</Link> {menu === "men" ? <hr/> : <></>}</li>
                <li onClick={()=>{setMenu("women")}}><Link to={'/womens'} style={{ textDecoration:"none" }}>Women</Link> {menu === "women" ? <hr/> : <></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link to={'/kids'} style={{ textDecoration:"none" }}>Kids</Link> {menu === "kids" ? <hr/> : <></>}</li>
            </ul>
            <div className='nav-login-cart'>
                {isAuthenticated ? <button onClick={handleLogout}>Logout</button> : <Link to={'/login'}><button>Login</button></Link>}
                {isAuthenticated && (<><Link to={'/cart'}><img src={cart_icon} alt='cart_logo'/></Link>
                <div className='nav-cart-count'>0</div></>)}
                
            </div>
        </div>
         <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />  
        </>
    
    )
}

export default Navbar;