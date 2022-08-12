import React, { Component } from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Blogs from '../components/pages/blog/Blogs'
import Home from '../components/pages/Home'
import Nav from '../components/Nav'
import NotFoundPage from '../components/pages/NotFoundPage'
import Dashboard from '../components/pages/dashboard/Dashboard'
import AddBlog from '../components/pages/form/AddBlog'


    const AppRouter =()=>{
      return(
        <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/admin' element={<Dashboard />}></Route>
          <Route path='/add' element={<AddBlog />}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
        </BrowserRouter>
      )
    }


export default AppRouter