import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
import Cart from './Cart'
import ContactUs from './ContactUs'
import Gallery from './Gallery'
import Error from './Error'
import Services from './Services'


function StackNavigation() {
  return (
    <Routes>
         <Route path='/' element={ <Home/>}/>
         <Route path='/Gallery' element={ <Gallery/>}/>
         <Route path='/Services' element={ <Services/>}/>
         <Route path='/ContactUs' element={ <ContactUs/>}/>
         <Route path='/Cart' element={ <Cart/>}/>
         <Route path='/AboutUs' element={ <AboutUs/>}/>
         <Route path='/*' element={ <Error/>}/>
       </Routes>
  )
}

export default StackNavigation