import React from 'react'
import { Image } from '../utils/Image'
import "./Home.css";
import Navbar from './Navbar';
const Home = () => {


    return (

        <div className='h-full'>
            <Navbar />
            <div className='xs:min-h-max landing-page'>
                <div className='flex h-screen justify-center items-center landing-page-overlay'>
                    <div className='text-white'>
                        <h1 className='xs:text-[20px] md:text-[30px] font-loto text-center'>  Hii, Everyone</h1>
                        <h1 className='xs:text-[50px] md:text-[70px] font-Roboto text-center'>React JS Developer.</h1>
                        <div className='flex justify-center'>
                            <div className='space-x-2'>
                                <button className='bg-btn_themes text-gray-900 px-6 py-2 border-2 border-white  text-[18px] font-Roboto'>Project</button>
                                <button className='bg-transparents px-6 py-2  border-2 border-white text-[18px] font-Roboto'>Contact</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='bg-[#000000] '>
                    <h1 className='pt-6 xs:text-[30px] md:text-[40px]  text-white font-Roboto text-center'>Project</h1>
                    <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-8 mt-10 xs:mx-2 md:mx-20'>
                        <div className='px-6 py-6 bg-[#141515]'>
                            <div className=' '>
                                <img className='h-44 w-full' src={Image.BackGround1}  alt="project"/>
                            </div>
                            <h1 className='pt-6 xs:text-[20px] md:text-[22px]  text-white font-Roboto '>Portfolio Website</h1>
                            <p className='text-white py-2 font-Roboto'>An ecommerce website is any site that allows you to buy and sell products and services online. Companies like Amazon and Alibaba are examples of ecommerce websites.</p>
                            <div className='flex justify-between pt-2'>
                                <button className=' bg-btn_themes text-gray-900 px-6 py-2 border-2 border-white  text-[18px] font-Roboto'><a href="#q">View</a></button>
                                <button className=' bg-btn_themes text-gray-900 px-6 py-2 border-2 border-white  text-[18px] font-Roboto'><a href="#w">Source</a></button>
                            </div>

                        </div>
                        <div className='px-6 py-6 bg-[#141515]'>
                            <div className=' '>
                                <img className='h-44 w-full' src={Image.BackGround1} alt='project' />
                            </div>
                            <h1 className='pt-6 xs:text-[20px] md:text-[22px]  text-white font-Roboto '>Portfolio Website</h1>
                            <p className='text-white py-2 font-Roboto'>An ecommerce website is any site that allows you to buy and sell products and services online. Companies like Amazon and Alibaba are examples of ecommerce websites.</p>
                            <div className='flex justify-between pt-2'>
                                <button className=' bg-btn_themes text-gray-900 px-6 py-2 border-2 border-white  text-[18px] font-Roboto'><a href="#w">View</a></button>
                                <button className=' bg-btn_themes text-gray-900 px-6 py-2 border-2 border-white  text-[18px] font-Roboto'><a href="#w">Source</a></button>
                            </div>
                        </div>
                        <div className='px-6 py-6 bg-[#141515]'>
                            <div className=' '>
                                <img className='h-44 w-full' src={Image.BackGround1}  alt='project1'/>
                            </div>
                            <h1 className='pt-6 xs:text-[20px] md:text-[22px]  text-white font-Roboto '>Portfolio Website</h1>
                            <p className='text-white py-2 font-Roboto'>An ecommerce website is any site that allows you to buy and sell products and services online. Companies like Amazon and Alibaba are examples of ecommerce websites.</p>
                            <div className='flex justify-between pt-2'>
                                <button className=' bg-btn_themes text-gray-900 px-6 py-2 border-2 border-white  text-[18px] font-Roboto'><a href="#h">View</a></button>
                                <button className=' bg-btn_themes text-gray-900 px-6 py-2 border-2 border-white  text-[18px] font-Roboto'><a href="#h">Source</a></button>
                            </div>
                           
                        </div>
                    </div>                   
                </div>
            </div>
        </div >
    )
}

export default Home