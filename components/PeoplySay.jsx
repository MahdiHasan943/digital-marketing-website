import React from 'react'
import { BsStarFill } from "react-icons/bs";

const Peoplesay = () => {
  return (
    <div id='people' className='overflow-hidden pb-10 xl:pr-[60px]'>

      <div className="lg:flex">
        {/* 1 */}
        <div className="lg:w-[80%] ">
          {/* 1 */}
          <div className=" relative">
            <img className='ml-[auto]' src="BlueAngel.png" alt="" />
            <img className='lg:mt-[-300px]' src="whiteAngel.png" alt="" />
            <div className="absolute bottom-40 left-20">
            <h2 className='peopleSay text-[44px] leading-[60px] xl:text-[89px] xl:leading-[100px]'>What <span className='text-[#136CF2]'>people say</span> <br />
              
              about us</h2>
            <p className='text-[#595959] pt-4  lato '>As the market leader in Experience Analytics we thrive solving complex digital experience challenges.</p>
           </div>
          </div>

          {/* 2 */}
          <div className=" relative py-10 md:pl-[60px] md:flex gap-16">
          <div className="bg-[#F9F9F9] flex gap-10 items-center m-4 py-8 px-10 shadow-md rounded-lg">
              <div className="">
              <h3 className='text-[#191919] text-[30px] font-bold'>4.8/5</h3>
              <h3 className='text-[#191919] py-4  font-bold'>Very Good</h3>

              
            <span className='text-[#595959]'>2023</span>
              </div>
              <div className="flex gap-4">
                <BsStarFill className='text-[gold] '></BsStarFill>
                <BsStarFill className='text-[gold] '></BsStarFill>
                <BsStarFill className='text-[gold] '></BsStarFill>
                <BsStarFill className='text-[gold] '></BsStarFill>
                <BsStarFill className='text-[gold] '></BsStarFill>


              </div>

          </div>

          <div className="bg-[#F9F9F9] flex gap-10 items-center m-4 py-8 px-10 shadow-md rounded-lg">
              <div className="">
              <h3 className='text-[#191919] text-[30px] font-bold'>4.9/5</h3>
              <h3 className='text-[#191919] py-4  font-bold'>Very Good</h3>

              
            <span className='text-[#595959]'>2022</span>
              </div>
              <div className="flex gap-4">
                <BsStarFill className='text-[gold] '></BsStarFill>
                <BsStarFill className='text-[gold] '></BsStarFill>
                <BsStarFill className='text-[gold] '></BsStarFill>
                <BsStarFill className='text-[gold] '></BsStarFill>
                <BsStarFill className='text-[gold] '></BsStarFill>


              </div>

          </div>

      {/* 2 */}
            
          <div className="bg-[#F9F9F9] absolute hidden 2xl:block 2xl:mr-[-50px] right-20  bottom-[10px] py-20 px-10 shadow-md rounded-lg">
            <img className='py-12' src="AromeAboh.png" alt="" />
            <p className='text-[#595959]'>Our inboubd lead has grown through SEO and <br /> Brand strategy implemented by Clear Touch Design.</p>
            <h3 className='text-[#191919] py-12 font-bold'>Arome Aboh</h3>
            <span className='text-[#595959]'>CEO Multiplico Financial</span>

          </div>

          </div>
        </div>
        {/* 2 */}

        <div className="flex md:pl-16 pt-20  lg:w-[20%] flex-col justify-around gap-20">
          <div className="bg-[#F9F9F9] py-12 px-10 shadow-md rounded-lg">
            <img className='py-12' src="IyeIlonah.png" alt="" />
            <p className='text-[#595959]'>They developed an ecommerce website which <br /> started small but since scaled in Huge business.</p>
            <h3 className='text-[#191919] py-12 font-bold'>Iye Ilonah</h3>
            <span className='text-[#595959]'>Founder Fayvouree Luxury</span>

          </div>

          <div className="bg-[#F9F9F9]  py-12 px-10 shadow-md rounded-lg">
            <img className='py-12' src="DiscoverLagos.png" alt="" />
            <p className='text-[#595959]'>Discover Lagos became the website <br /> for everything Lagos, thanks to Cleartouch Design.</p>
            <h3 className='text-[#191919] py-12 font-bold'>Fola Goldberg</h3>
            <span className='text-[#595959]'>Owner Discover Lagos</span>

          </div>
        </div>
        </div>

    </div>
  )
}

export default Peoplesay