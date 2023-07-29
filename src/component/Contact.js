import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
const Contact = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='xs:min-h-max  background'>
        <div className='flex h-full justify-center items-center background-landing-page-overlay'>
            <div className='text-white mt-10'>
              <h1 className='text-[40px] font-Roboto text-center'>Contact</h1>
              <h1 className='xs:text-[20px] md:text-[30px] font-loto text-center'>Let's have a chat</h1>
            </div>
        </div>
        <div className='bg-[#000000]  text-white '>
          <div className='flex justify-center items-center py-10'>
            <form action="" method="" role="form" className="pt-8  rounded mx-4 px-8 border border-white py-10 ">              
                <div className="">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" className="text-gray-700 form-control w-full p-2 border border-gray-200 focus:ring-0 outline-none"  id="name" required="" />
                </div>
                <div className="py-2">
                  <label for="name">Your Email</label>
                  <input type="email" className="text-gray-700 w-full p-2 border border-gray-200 focus:ring-0 outline-none" name="email" id="email" required="" />
                </div>
            
              <div className="form-group py-2">
                <label for="name">Message</label>
                <textarea className="form-control text-gray-700 w-full p-2 border border-gray-200 focus:ring-0 outline-none" name="message" rows="" required="">Type message here...</textarea>
              </div>

              <div className="text-center my-2 md:mt-5 "><button type="submit" className='bg-btn_themes hover:bg-blue-400 w-full rounded p-2 text-white'>Send Message</button></div>
            </form>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Contact