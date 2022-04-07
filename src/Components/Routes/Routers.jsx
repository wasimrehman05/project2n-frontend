import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Home/Home'
import { Navbar } from '../Home/Navbar'
import { Brands } from '../Home/navbarComp/Brands'
import { Account } from '../Section/Account'
import { Appliances } from '../Section/Appliances'
import Cart from '../Section/Cart'
import { Product } from '../Section/Product'

const Routerss = () => {
  return (
    <>
     <Navbar />
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/appliances' element={<Appliances/>} />
        <Route path='/nykanetwork' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/account' element={<Account/>} />
        <Route path='/brands' element={<Brands/>} />

        


      
    </Routes>
    </>
  )
}

export default Routerss
