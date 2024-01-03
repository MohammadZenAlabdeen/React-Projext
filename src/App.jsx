import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import PageOne from './Pages/Page1/PageOne.jsx'
import { Route,Routes } from 'react-router'
import { BrowserRouter } from "react-router-dom";
import PageTwo from './Pages/Page2/PageTwo.jsx'
import PageThree from './Pages/Page3/PageThree.jsx'
import Category from './Main/Category/Category.jsx'


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<PageOne></PageOne>}></Route>
      <Route path='/about' element={<PageTwo></PageTwo>}></Route>
      <Route path='/packages' element={<PageThree></PageThree>}></Route>
      <Route path='/#Category' element={<PageOne></PageOne>}></Route>
    </Routes> 
    </>
  )
}

export default App
