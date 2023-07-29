import { useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";


export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="w-full p-2 bg-black fixed z-50">
        <div className="">
          <div className=" flex justify-between  xs:px-2 md:px-28 ">
            <div  className="flex" >
              <h1 className="xs:text-[20px] md:text-[25px] text-white font-bold">Nidhi's<span className="text-btn_themes">Portfolio</span></h1>
              {/* <img className='w-10 h-10' src={Images.Logo} alt="" /> */}
            </div>
            <div className="flex gap-2  ">
              <nav className={`space-x-8 pb-3 lg:block lg:pb-0 lg:mt-0 ${navbar ? "block  " : "hidden"
                }`}>
                <ul className="items-center justify-center xs:my-0 md:my-0 pt-2   space-y-6 md:flex md:space-x-6 md:space-y-0 cursor-pointer">
                   <li className="hover:text-btn_themes active:text-btn_themes font-medium text-white ">                   
                   <Link to="/">Home</Link> </li>
                  <li className="text-white font-medium hover:text-btn_themes active:text-btn_themes"> <Link to="/about">About</Link></li>
                  <li className="text-white  font-medium hover:text-btn_themes active:text-btn_themes "> <Link to="/project">Project</Link>  </li>
                  <li className="text-white  font-medium hover:text-btn_themes active:text-btn_themes"> <Link to="/contact">Contact</Link> </li>
                </ul>
              </nav>
              <div className="flex space-x-4 px-2 pt-1 mb-5 cursor-pointer ">                
                <div className=" text-white fa fa-bars lg:invisible" onClick={() => {
                  setNavbar(!navbar);
                }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
}

