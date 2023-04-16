import React from 'react'
import './footer.css'
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsTelephone, BsEnvelopeFill, } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
const Footer = () => {
  return (
    <div  className=' bg-[#053E94]  text-white pb-4 pt-8 px-[60px]'>
      <div className="flex justify-end items-center py-6  gap-4">
        
        <div className='bg-[#1877F2] rounded-md p-4'><BsFacebook ></BsFacebook></div>
        <div className='bg-[#1DA1F2] rounded-md p-4'>   <BsTwitter></BsTwitter></div>

        <div className='bg-[#2867B2] rounded-md p-4'>  <BsLinkedin className=''></BsLinkedin></div>
        <div className='bg-[#F00073] rounded-md p-4'> <BsInstagram></BsInstagram></div>


      </div>

      <div className="w-full h-[1px] bg-white">
        
      </div>
      <div className="lg:flex  justify-between  mx-auto py-6 gap-4 ">
        <div className="">
          <p className='footerP'>Reach us</p>
          <div className="">
           
            <div className="">
            <p className='pt-4 flex items-center gap-4'> <BsTelephone></BsTelephone> +1012 3456 789</p>
          <p className='py-4 flex items-center gap-4'> <BsEnvelopeFill></BsEnvelopeFill>  demo@gmail.com</p>
          <p className='flex items-center gap-4'><CiLocationOn></CiLocationOn>   132 Dartmouth Street Boston,  Massachusetts <br /> 02156 United States</p>

            </div>

          </div>
        </div>
        <div className="py-16 lg:py-0">
          <p className='footerP'>Company</p>
          
          <p className='pt-4'>About</p>
          <p className='py-4'>Contact</p>
          <p>Our Services</p>

        </div>
        <div className="">
          <p className='footerP'>Legal</p>
          <p className='pt-4'>Privacy Policy</p>
          <p className='py-4'>Terms & Services</p>
          <p>Terms of Use</p>

        </div>
        <div className="py-16 lg:py-0">
        <p className='footerP'>Quick Links</p>
         
        <p className='pt-4'>FAQs</p>
          <p className='py-4'>Downloads</p>
          <p>Forum</p>
        </div>
        <div className="">
            
          <div className="bg-[#383737] px-4 py-10">
            <p className='Newsletter py-4 text-center'>Join Our Newsletter</p>
            <div className="flex py-4  mx-auto justify-center w-[100%] overflow-hidden">
              
              
    <input type="text" placeholder="Your email address" className=" w-full py-8 bg-[#1E1E1E]  input-bordered-none rounded-none input" />
                <button className="btn text-white py-8 bg-[#000] focus-outline-none outline-none subscribe">
                  Subscribe
    </button>
            </div>
            <p className=' text-center will'>*  Will send you weekly updates for your better tool <br /> management.</p>
 

          </div>
        </div>


      </div>
          
      



      
      <p className='text-center py-8 copy'>
      @2023 ClearTouch Design | All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer