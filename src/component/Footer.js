
import React from 'react'

const Footer = () => {
    const today = new Date();
  const year = today.getFullYear();
    return (
        <div className='bg-[#171f1f]' >
            <footer className=" text-white pt-10 xs:px-2 md:px-10  ">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl font-semibold ">Let's keep in touch!</h4>
                        <h5 className="text-lg mt-0 mb-2 ">
                            Find us on any of these platforms, we respond 1-2 business days.
                        </h5>
                        <div className="mt-6 lg:mb-0 pb-6">
                            <button className="bg-white  text-gray-900 hover:text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fa fa-facebook"></i>   </button>
                            <button className="bg-white   text-gray-900 hover:text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fa fa-twitter "></i></button>
                            <button className="bg-white  text-gray-900 hover:text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fa fa-github"></i>
                            </button>

                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12  ml-auto ">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Contact</span>
                                <ul className="">
                                    <li className=" hover:text-blue-400 font-semibold block pb-2 text-sm"> <i className="fa fa-home pr-1 "></i>C-200 sec-15 Noida </li>
                                    <li className=" hover:text-blue-400 font-semibold block pb-2 text-sm"><i className="fa fa-phone pr-2"></i>8746584789 </li>
                                    <li className=" hover:text-blue-400 font-semibold block pb-2 text-sm"><i className="fa fa-envelope pr-2"></i>  singh@test.com </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-6/12 ">
                                <span className="block uppercase text-sm font-semibold xs:mt-2 md:mt-0">About me</span>
                                <p className='text-sm py-2'>
                                   Welcome to my portfolio website! Here, you'll find a showcase of my skills, accomplishments, and projects. As a web developer, I have crafted this site to reflect my passion for creating visually engaging and user-friendly experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-[14px] px-6 pb-4 flex justify-center items-center"><div >Copyright ©<span> {year}</span> &nbsp; All Rights Reserved.</div></div>


            </footer>
        </div>
    )
}

export default Footer