import React from 'react'
import { Image } from '../utils/Image'
import "./Main.css";
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
const Home = () => {


    return (
        <div className=''>
            <Navbar />
            <div className='landing-page '>
                <div className='flex h-screen justify-center items-center landing-page-overlay'>
                    <div className='text-white'>
                        <h1 className='xs:text-[20px] md:text-[30px] font-loto text-center uppercase tracking-wider'>Hi, I'm Nidhi</h1>
                        <h1 className='xs:text-[50px] md:text-[60px] font-Roboto font-bold text-center tracking-tighter'>React JS Developer.</h1>
                        <div className='flex justify-center'>
                            <div className='space-x-2'>
                                <button className='bg-btn_themes hover:bg-transparent hover:text-white text-gray-900 px-6 py-2 border-2 border-white  text-[18px] font-Roboto'><Link to={'/project'}> Project</Link></button>
                                <button className='bg-transparents px-6 py-2  border-2 border-white text-[18px] font-Roboto'><Link to={'/contact'}> Contact</Link> </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#000000] '>
                    <h1 className='pt-6 xs:text-[30px] md:text-[40px]  text-white font-Roboto text-center'>Project</h1>
                    <div className='grid xs:grid-cols-1 md:grid-cols-3 gap-8 my-10 xs:mx-2 md:mx-20'>
                        <div className='px-6 py-6 bg-[#141515]'>
                            <div className=' '>
                                <img className='h-44 w-full' src={Image.Project1} alt="project" />
                            </div>
                            <h1 className='pt-6 xs:text-[20px] md:text-[22px]  text-white font-Roboto '>Degital Marketing Website</h1>
                            <p className='text-white py-2 tracking-tight'>This React-based digital marketing website offers an engaging platform to showcase marketing services, success stories, and client testimonials.    Leveraging React's component-driven approach, it ensures a responsive and visually appealing site to attract clients and drive business growth.</p>
                            <div className='flex justify-between pt-2'>
                                <a href="https://amazing-mousse-ede566.netlify.app/" target="_blank" className='bg-btn_themes hover:bg-transparent hover:text-white text-gray-900 px-6 py-2 border-2 border-white  text-[18px] font-Roboto'>View </a>                              
                                <a href="https://amazing-mousse-ede566.netlify.app/" target="_blank" className='bg-btn_themes hover:bg-transparent hover:text-white text-gray-900 px-6 py-2 border-2 border-white  text-[18px] font-Roboto'>Source </a>
                            </div>
                        </div>
                        <div className='px-6 py-6 bg-[#141515]'>
                            <div className=' '>
                                <img className='h-44 w-full' src={Image.Project2} alt='project'/>
                            </div>
                            <h1 className='pt-6 xs:text-[20px] md:text-[22px]  text-white font-Roboto'>Portfolio Website</h1>
                            <p className='text-white py-2 tracking-tight'>In this, React portfolio website showcases a my skills, projects, and achievements. It provides an interactive and visually appealing platform to display their work and attract potential clients or employers. With its efficient component-based structure and dynamic UI.</p>
                            <div className='flex justify-between pt-2'>
                                <a href="https://rococo-biscuit-830d9f.netlify.app/" target="_blank" className='bg-btn_themes hover:bg-transparent hover:text-white text-gray-900 px-6 py-2 border-2 border-white  text-[18px] font-Roboto'>View </a>                              
                                <a href="https://rococo-biscuit-830d9f.netlify.app/" target="_blank" className='bg-btn_themes hover:bg-transparent hover:text-white text-gray-900 px-6 py-2 border-2 border-white  text-[18px] font-Roboto'>Source </a>
                            </div>
                        </div>
                        <div className='px-6 py-6 bg-[#141515]'>
                            <div className=' '>
                                <img className='h-44 w-full' src={Image.Project3} alt='project' />
                            </div>
                            <h1 className='pt-6 xs:text-[20px] md:text-[22px]  text-white font-Roboto '>CRUD Opration Using API</h1>
                            <p className='text-white py-2 tracking-tight'> This web application that allows users to interact with data through a set of API endpoints. It enables users to perform operations like adding new data (Create), retrieving existing data (Read), updating data (Update), and deleting data (Delete) through HTTP requests.</p>
                            <div className='flex justify-between pt-2'>
                                <a href="https://rococo-biscuit-830d9f.netlify.app/" target="_blank" className='bg-btn_themes hover:bg-transparent hover:text-white text-gray-900 px-6 py-2 border-2 border-white  text-[18px] font-Roboto'>View </a>                              
                                <a href="https://rococo-biscuit-830d9f.netlify.app/" target="_blank" className='bg-btn_themes hover:bg-transparent hover:text-white text-gray-900 px-6 py-2 border-2 border-white  text-[18px] font-Roboto'>Source </a>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div >
    )
}

export default Home