import { useState } from 'react'

import Home from './components/Home'
import Layout from './components/Layout'
import Blog from './components/Blog'
import Vendors from './components/Vendors'
import Contact from './components/Contact'
import Shop from'./components/Shop'
import Signin from './components/Signin'
import Form from './components/Form'
import Contactme from './components/Contactme'
import DashboardLayout from './Dashboard/DashboardLayout'
import DashboardView from './Dashboard/DashboardView'
import Productlist from './Dashboard/Productlist'
import Categorylist from './Dashboard/Categorylist'
import Customerlist from './Dashboard/Customerlist'
import Customer from './Dashboard/Customer'

// import HomePage from'./components/HomePage'
import SinglePage from'./components/SinglePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route path='/' index  element={<Home/>} />
            <Route path='/home'  element={<Home/>} />
            <Route path='/blog'  element={<Blog />} />
            <Route path='/Vendors' element={<Vendors/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Contactme' element={<Contactme/>}/>
            <Route path='/Shop' element={<Shop/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/Form' element={<Form/>}/>
           
            {/* <Route path='/view' element={<HomePage/>}/> */}
            <Route path="/singlecard/:id" element={<SinglePage/>}/>
          </Route>
          <Route path='/'element={<DashboardLayout/>}>
         
          <Route path='/Dashboard' index element={<DashboardView/>}/>
          <Route path='/Dashboard/catalog' index element={<Productlist/>}/>
          <Route path='/Dashboard/productList' element={<Productlist/>}/>
          <Route path='/Dashboard/Categorylist'  element={<Categorylist/>}/>
          <Route path='/Dashboard/Customerlist'  element={<Customerlist/>}/>
          <Route path='/Dashboard/Customer'  element={<Customer/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
