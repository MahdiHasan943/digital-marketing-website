import React from 'react'
import './faqs.css'

const Faqs = () => {
  return (
    <div id='faq' className='px-8 lg:px-[60px] bg py-[100px]'>
      <h2 className='FAQ m-0 py-20'>FAQ</h2>
      <h3 className='asked m-0'>Frequently Asked
      <br />
        Questions</h3>
      
      <div className="grid pt-[90px] grid-cols-1 md:grid-cols-2 gap-10">
        <div className="py-20">
          <h3 className='question text-center py-10'>How Can I Choose?</h3>
          <p className='text-[#136cf2] text-center'>Lorem Ipsum is simply dummy text of the printing.</p>
        </div>
        <div className="py-20">
          <h3 className='question text-center py-10'>How Can I Choose?</h3>
          <p className='text-[#136cf2] text-center'>Lorem Ipsum is simply dummy text of the printing.</p>
        </div>
        <div className="py-20">
          <h3 className='question py-10 text-center'>How Can I Choose?</h3>
          <p className='text-[#136cf2] text-center'>Lorem Ipsum is simply dummy text of the printing.</p>
        </div>
        <div className="py-20">
          <h3 className='question py-10 text-center'>How Can I Choose?</h3>
          <p className='text-[#136cf2] text-center'>Lorem Ipsum is simply dummy text of the printing.</p>
        </div>
      </div>
      <div className="mx-auto py-[10px] text-center">
            <button className="bg-[#63cb99] text-white py-5 px-4">
              Get Started
            </button>
            <button className="mx-8 text-white bg-[#136CF2] py-5 px-7">
              Let's Talk
            </button>
          </div>

    </div>
  )
}

export default Faqs