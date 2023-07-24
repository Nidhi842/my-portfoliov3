import { useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";


export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="w-full p-2 bg-black fixed z-50">
        <div className="">
          <div className="p-2 flex justify-between  xs:px-2 md:px-28 ">
            <div  className="flex -mt-2" >
              <h1 className="xs:text-[20px] md:text-[25px] text-white font-Roboto">Degital<span className="text-blue-600">Marketing</span></h1>
              {/* <img className='w-10 h-10' src={Images.Logo} alt="" /> */}
            </div>
            <div className="flex gap-4">
              <nav className={`space-x-8 pb-3 mt-8  lg:block lg:pb-0 lg:mt-0 ${navbar ? "block  " : "hidden"
                }`}>
                <ul className="items-center justify-center xs:my-2 md:my-0  left-0 space-y-6 md:flex md:space-x-6 md:space-y-0 cursor-pointer">
                   <li className="text-blue-500 font-medium hover:text-blue-500 ">                   
                    Home</li>
                  <li className="text-[#666565] font-medium hover:text-blue-500" > <Link to="/about">About</Link></li>
                  <li className="text-[#666565]  font-medium hover:text-blue-500"> <Link to="/project">Project</Link>  </li>
                  <li className="text-[#666565]  font-medium hover:text-blue-500"> <Link to="/about">Pricing</Link></li>
                  <li className="text-[#666565]  font-medium hover:text-blue-500"> <Link to="/about">Contact</Link> </li>
                </ul>
              </nav>
              <div className="flex space-x-4 px-2 pt-1 cursor-pointer">                
                <div className="hover:text-blue-500 fa fa-bars  lg:invisible" onClick={() => {
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

