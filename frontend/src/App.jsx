import React, {lazy, Suspense, useState}from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import SideBar from './components/side-bar-component/SideBar';
import {GlobalStyle} from './global-style';
// import Products from './Pages/products-page/Products';
import ProductDetail from './Pages/product-detail/ProductDetail'
import Cart from './Pages/cart-page/Cart';
import Signin from './Pages/sign-in/Signin';
import Register from './Pages/register/Register';
import CreateProduct from './Pages/create-product/CreateProduct';
import Shipping from './Pages/shipping/Shipping';
import Payment from './Pages/payment/Payment';
import PlaceOrder from './Pages/place-order/PlaceOrder';
import OrderDetail from './Pages/OrderDetail/OrderDetail';
import OrderHistory from './Pages/orderHistory/OrderHistory';
import Profile from './Pages/profile/Profile';
import Admin from './Pages/admin/Admin';
import OrderList from './Pages/order-list/OrderList';
import Loading from './components/loading/Loading';

const Products = lazy(() => import('./Pages/products-page/Products'));

function App() {
  const [toggleMenu, setToggleMenu] = useState(false)

  const openMenu = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu)
  }

  return (
    <> 
      <GlobalStyle />
      <Header openmenu={openMenu}/>
      <SideBar openmenu={openMenu} open={toggleMenu}/>
      <Routes> 
        <Suspense fallback={<div>...Loading</div>}>
        <Route path='/' element={<Products />}></Route>
        </Suspense>
        <Route path='/:brand' element={<Products/>}/>
        <Route path="/product/::id" element={<ProductDetail />}/>
        <Route path="/cart/:id" element={<Cart />}/>
        <Route path='/signin' element={<Signin />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products' element={<CreateProduct />}/>
        <Route path="/shipping" element={<Shipping />}/>
        <Route path="/payment" element={<Payment />}/>
        <Route path="/placeorder" element={<PlaceOrder />}/>
        <Route path="/order/:id" element={<OrderDetail />}/>
        <Route path="/orderhistory" element={<OrderHistory/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/admin" element={<Admin />}>
          <Route path="orderlist" element={<OrderList />}/>
        </Route>
        
      </Routes>
     </>
  );
}
 
export default App;
