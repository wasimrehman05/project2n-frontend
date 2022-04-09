import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from '../Home/Footer'
import { Home } from '../Home/Home'
import { Navbar2 } from '../Home/navbarComp/Navbar2'
import { AppliancesSec } from '../Home/navbarComp/AppliancesSec'
// import { Brands } from '../Home/navbarComp/Brands'
import { Account } from '../Section/Account'
import { Appliances } from '../Section/Appliances'
import Cart from '../Section/Cart'
import { Product } from '../Section/Product'

const Routerss = () => {
  return (
    <>
    {/* <Navbar /> */}
    <Navbar2 />
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/appliances' element={<Appliances/>} />
        <Route path='/nykanetwork' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/account' element={<Account/>} />
        <Route path='/brands' element={<AppliancesSec/>} />
        
    </Routes>
    <Footer />
    </>
  )
}

export default Routerss
