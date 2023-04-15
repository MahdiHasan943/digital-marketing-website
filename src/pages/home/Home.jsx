import React from 'react'
import Hero from '../hero/Hero'
import Platform from '../platform/Platform'
import Company from '../complany/Company'
import Marketing from '../Marketing/Marketing'
import Peoplesay from '../people/Peoplesay'
import Faqs from '../FAQs/Faqs'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <div className=' pt-8 '>

      <Hero></Hero>
      <Platform></Platform>
      <Company></Company>
      <Marketing></Marketing>
      <Peoplesay></Peoplesay> 
      <Faqs></Faqs>
      <Contact></Contact>
      
    </div>
  )
}

export default Home