import React from 'react'
import { Routes, Route } from 'react-router-dom'

import BookExpand from '../pages/BookExpand'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import Orders from '../pages/Orders'

const router = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="orders" element={<Orders />} />
    <Route path="cart" element={<Cart />} />
    <Route path="book-detail/:id" element={<BookExpand/>}/>
    </Routes>
  )
}

export default router;