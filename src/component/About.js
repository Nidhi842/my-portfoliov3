import React from 'react'
import Navbar from './Navbar';
import { Image } from '../utils/Image';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className=''>
            <Navbar />
            <div className='xs:min-h-max  background'>
                <div className='flex h-full justify-center items-center background-landing-page-overlay'>
                    <div className='flex  justify-center items-center '>
                        <div className='text-white mt-10'>
                            <h1 className='text-[30px]  font-Roboto font-bold text-center'>About</h1>
                            <h1 className='xs:text-[20px] md:text-[30px] font-loto text-center'>I'm friendly Front-End Developer.</h1>
                        </div>
                    </div>

                </div>
                <div className='bg-[#000000]  h-max pt-20'>
                    <div className='text-white'>
                        <h1 className='text-center text-[30px] font-Roboto font-[20px]'>Who I Am ?</h1>
                        <p className='text-center my-4'>I'm a React Font-end Developer. <br />I create responsive secure website for my clients.</p>
                        <div className='flex justify-center my-6'>
                            <button className='bg-btn_themes hover:bg-transparent px-6 py-2  border-2 border-white text-[18px] font-Roboto'>  <Link to="/contact">Contact</Link>  </button>
                        </div>
                       <div className='mt-20'> <div className='ml-10 '>
                            <img className='xs:w-[300px] md:w-[800px] ' src={Image.About4} alt='about4' />
                        </div>
                        <div className='z-50 xs:-mt-10 md:-mt-28 flex justify-end py-10 mr-10'>
                            <img className='w-1/2 h-1/2 ' src={Image.About1} alt='about1' />
                        </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default About