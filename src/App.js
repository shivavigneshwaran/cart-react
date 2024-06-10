import './App.css';
import React, { useContext, useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Signup from './pages/Signup';
import Login from './pages/Login';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';
import Footer from './Components/Footer/Footer';
import { AuthProvider, useAuth } from './Context/AuthContext';
import Offers from './Components/Offers/Offers';
import {disableReactDevTools} from '@fvilers/disable-react-devtools';
import { fetchProduct } from "./redux/productReducer";
import { addCount } from "./redux/ProductCountReducer";


if(process.env.NODE_ENV === "production") disableReactDevTools();


function App() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalQuantity = cart.reduce((acc,item)=> acc+item.quantity,0);
    const productData = useSelector((state) => state?.products?.products);
    const dispatch = useDispatch();
    const status = useSelector((state) => state?.products?.status);
    const error = useSelector((state) => state?.products?.error);
    const productCount = useSelector((state) => state?.productCount?.count);

  useEffect(()=>{
    dispatch(fetchProduct());
    dispatch(addCount(totalQuantity));

    console.log('parentcomponent'); 
},[]);

  if (status === 'loading') {

      return (
        <div className="loading-container">
          <CircularProgress isIndeterminate color='green.300' />
        </div>
      );  
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
  return (
    <div className={status === 'loading' ? 'blur-background' : ''} >
      <BrowserRouter>
        <AuthProvider>
        <Navbar productCount={productCount}/>
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
            <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
            <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
            <Route path='/product'>
              <Route path=':productId' element={<Product />} />
            </Route>
            <Route path='/cart' element={<ProtectedRoute><Cart productCount={productCount} cart={cart}/></ProtectedRoute>} />
            <Route path='/register' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='#/login' element={<Login />} />
          </Routes>
        </AuthProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default App;
