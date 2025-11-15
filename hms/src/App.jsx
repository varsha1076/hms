import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './layout/Header'
import About from './pages/About'
import Blog from './pages/Blog'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}>
      <Route path='/about' element={<About/>}>
      </Route>
      <Route path='/blog' element={<Blog/>}>
      </Route>
      <Route path='/contact' element={<Contact/>}>
      </Route>

      </Route>
    </Routes>
    </BrowserRouter>
    </>
   
  )
}