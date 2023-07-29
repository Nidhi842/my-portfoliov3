import React from 'react'
import Navbar from './Navbar';
import './Main.css'
import { Image } from '../utils/Image';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Project = () => {
    return (
        <div className=''>
            <Navbar />
            <div className=' background'>
                <div className='flex h-full justify-center items-center background-landing-page-overlay'>
                    <div className='flex justify-center items-center '>
                        <div className='text-white mt-14'>
                            <h1 className='text-[30px]  font-Roboto font-bold text-center'> Projects</h1>
                            <h1 className='xs:text-[20px] md:text-[30px] font-loto text-center'>Some of my most recent works</h1>
                        </div>
                    </div>
                </div>
                {/* <div className='flex h-full justify-center items-center background-landing-page-overlay'>
                    <div className='flex  justify-center items-center '>
                        <div className='text-white mt-10'>
                            <h1 className='text-[30px]  font-Roboto font-bold text-center'>About</h1>
                            <h1 className='xs:text-[20px] md:text-[30px] font-loto text-center'>I'm friendly Front-End Developer.</h1>
                        </div>
                    </div>
                </div> */}
                <div className='bg-[#000000] '>
                    {/* <h1 className=' xs:text-[30px] md:text-[40px]  text-white font-Roboto font-semibold text-center pt-8'>Project</h1> */}
                    <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-8 pt-10 xs:mx-2 md:mx-20'>
                        <div className='px-6 py-6 bg-[#141515]'>
                            <div className=' '>
                                <img className='h-44 w-full' src={Image.Project1} alt="project" />
                            </div>
                            <h1 className='pt-6 xs:text-[20px] md:text-[22px]  text-white font-Roboto '>Portfolio Website</h1>
                            <p className='text-white py-2 font-Roboto'>An ecommerce website is any site that allows you to buy and sell products and services online. Companies like Amazon and Alibaba are examples of ecommerce websites.</p>
                            <div className='flex justify-between pt-2'>
                                <button className=' bg-btn_themes hover:bg-transparent text-gray-900 hover:text-white  px-6 py-2 border-2 border-white  text-[18px] font-Roboto'><a href="#q">View</a></button>
                                <button className=' bg-btn_themes hover:bg-transparent text-gray-900 hover:text-white  px-6 py-2 border-2 border-white  text-[18px] font-Roboto'><a href="#w">Source</a></button>
                            </div>

                        </div>
                        <div className='px-6 py-6 bg-[#141515]'>
                            <div className=' '>
                                <img className='h-44 w-full' src={Image.Project2} alt='project'/>
                            </div>
                            <h1 className='pt-6 xs:text-[20px] md:text-[22px]  text-white font-Roboto '>Portfolio Website</h1>
                            <p className='text-white py-2 font-Roboto'>An ecommerce website is any site that allows you to buy and sell products and services online. Companies like Amazon and Alibaba are examples of ecommerce websites.</p>
                            <div className='flex justify-between pt-2'>
                                <button className=' bg-btn_themes hover:bg-transparent text-gray-900 hover:text-white  px-6 py-2 border-2 border-white  text-[18px] font-Roboto'><a href="#w">View</a></button>
                                <button className=' bg-btn_themes hover:bg-transparent text-gray-900 hover:text-white  px-6 py-2 border-2 border-white  text-[18px] font-Roboto'><a href="#w">Source</a></button>
                            </div>
                        </div>
                        <div className='px-6 py-6 bg-[#141515]'>
                            <div className=' '>
                                <img className='h-44 w-full' src={Image.Project3} alt='project1' />
                            </div>
                            <h1 className='pt-6 xs:text-[20px] md:text-[22px]  text-white font-Roboto '>Portfolio Website</h1>
                            <p className='text-white py-2 font-Roboto'>An ecommerce website is any site that allows you to buy and sell products and services online. Companies like Amazon and Alibaba are examples of ecommerce websites.</p>
                            <div className='flex justify-between pt-2'>
                                <button className=' bg-btn_themes hover:bg-transparent text-gray-900 hover:text-white  px-6 py-2 border-2 border-white  text-[18px] font-Roboto'><a href="#h">View</a></button>
                                <button className=' bg-btn_themes hover:bg-transparent text-gray-900 hover:text-white  px-6 py-2 border-2 border-white  text-[18px] font-Roboto'><a href="#h">Source</a></button>
                            </div>
                        </div>
                    </div>
                    <div className='m-10 py-10  text-white'>
                        <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-6 ">
                            <div className="border border-white p-4 rounded text-center">
                                <h3 className='py-2 text-[30px]'>- Basic -</h3><span className="bar"></span>
                                <div className="my-6">
                                    <p className=' py-2 text-[30px]'><i className='fa fa-rupee text-btn_themes'></i> <strong>1000</strong></p>
                                    <p className=' py-2 '><i className='fa fa-check text-btn_themes'></i> 1 Day</p>
                                    <p className=' py-2 '><i className='fa fa-check text-btn_themes'></i> 3 Pages</p>
                                    <p className=' py-2 '><i className='fa fa-check text-btn_themes'></i> Featured</p>
                                    <p className=' py-2 '><i className='fa fa-check text-btn_themes'></i> Responsive Design</p>
                                </div>
                                <button className='bg-btn_themes  hover:bg-transparent border border-white p-2 text-gray-900 hover:text-white font-semibold'>
                                    <Link to="/contact">PURCHASE NOW</Link>
                                </button>
                            </div>
                            <div className="border border-white p-4 rounded text-center">
                                <h3 className=' py-2 text-[30px]'>- Advanced  -</h3><span className="bar"></span>
                                <div className="my-6">
                                    <p className=' py-2 text-[30px]'><i className='fa fa-rupee text-btn_themes'></i> <strong>2000</strong></p>
                                    <p className=' py-2 '><i className='fa fa-check text-btn_themes'></i> 1 Day</p>
                                    <p className=' py-2 '><i className='fa fa-check text-btn_themes'></i> 3 Pages</p>
                                    <p className=' py-2 '><i className='fa fa-check text-btn_themes'></i> Featured</p>
                                    <p className=' py-2 '><i className='fa fa-check text-btn_themes'></i> Responsive Design</p>
                                </div>
                                <button className='bg-btn_themes  hover:bg-transparent border border-white p-2 text-gray-900 hover:text-white font-semibold'>
                                    <Link to="/contact">PURCHASE NOW</Link>
                                </button>
                            </div>
                            <div className="border border-white p-4 rounded text-center">
                                <h3 className=' py-2 text-[30px]'>-Premium-</h3><span className="bar"></span>
                                <div className="my-6">
                                    <p className=' py-2 text-[30px]'><i className='fa fa-rupee text-btn_themes'></i> <strong>5000</strong></p>
                                    <p className=' py-2 '><i className='fa fa-check text-btn_themes'></i> 1 Day</p>
                                    <p className=' py-2 '><i className='fa fa-check text-btn_themes'></i> 3 Pages</p>
                                    <p className=' py-2 '><i className='fa fa-check text-btn_themes'></i> Featured</p>
                                    <p className=' py-2 '><i className='fa fa-check text-btn_themes'></i> Responsive Design</p>
                                </div>
                                <button className='bg-btn_themes  hover:bg-transparent border border-white p-2 text-gray-900 hover:text-white font-semibold'>
                                    <Link to="/contact">PURCHASE NOW</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>

        </div>
    )
}

export default Project;