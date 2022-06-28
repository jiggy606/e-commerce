import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from '../pages/Home';
import Login from '../pages/Login';
import Product from '../pages/Product';
import ProductList from '../pages/ProductList';
import Register from '../pages/Register';
import Cart from '../pages/Cart';

const Main = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/product' element={<Product />} />
                    <Route path='/productlist' element={<ProductList />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Main