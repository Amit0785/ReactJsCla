import React from 'react'
import Section1 from '../Components/Section1'
import Section2 from '../Components/Section2'
import Product from './Product'
import Laptop from './Laptop'
import Review from './Review'
import ContactUs from './ContactUs'


function Home() {
  return (
    <>
    <Section1/>
      <Section2/>
      <Product/>
      <Laptop/>
      <Review/>
      <ContactUs/>
      </>
  )
}

export default Home