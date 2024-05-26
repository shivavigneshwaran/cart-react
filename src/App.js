import './App.css';
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



function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
        <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
            <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
            <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
            <Route path='/product'>
              <Route path=':productId' element={<Product />} />
            </Route>
            <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            <Route path='/register' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </AuthProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/" /> : <Navigate to="/login" />;
}

export default App;
