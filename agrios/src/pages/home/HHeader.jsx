

import React from 'react'
import { ChevronDown, Search, ShoppingCart } from "lucide-react";
import wlogo from '../../assets/icon/wlogo.svg';
import wtwitter from '../../assets/icon/wtwitter.svg';
import wfacebook from '../../assets/icon/wfacebook.svg';
import wpinterest from '../../assets/icon/wpinterest.svg';
import winstagram from '../../assets/icon/winstagram.svg';
import ophone from '../../assets/icon/ophone.svg';
import { Link, useLocation } from "react-router-dom";


function HHeader() {
  return (
        <div className="relative min-h-screen">
           <div className="absolute inset-0 bg-[url('./images/img1.png')] bg-cover bg-center opacity-100"></div>
           <div className="absolute inset-0 "></div>
           
           {/* Лучи */}
           <div
             className="absolute z-0"
             style={{
               top: '-80px',
               left: '200px',
               width: '230px',
               height: '100%',
               transform: 'rotate(15.098deg)',
               opacity: 0.08,
                background: 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)',
             }}
           ></div>
           <div
             className="absolute z-10"
             style={{
               top: '-80px',
               left: '320px',
               width: '230px',
               height: '100%',
               transform: 'rotate(15.098deg)',
               opacity: 0.06,
                background: 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)',
             }}
           ></div>
           
           <div className="relative  py-[25px]">
         
             <header className="w-full  mx-auto flex items-center justify-between py-4 px-4 z-20 relative">
             
             {/* ЛОГОТИП */}
             <div className=" gap-4">
               <img
                 src={wlogo}
                 alt="Logo"
                 className="w-[170px]"
               />
             </div>
     
             {/* СОЦИАЛЬНЫЕ СЕТИ */}
             <div className="flex gap-3">
               <a
                 href="#"
                 className="flex justify-center items-center w-10 h-10 p-2 rounded-full bg-[#828282] opacity-100"
               >
                 <img src={wtwitter} alt="twitter" className="w-4 h-4" />
               </a>
               <a
                 href="#"
                 className="flex justify-center items-center w-10 h-10 p-2 rounded-full bg-[#828282] opacity-100"
               >
                 <img src={wfacebook} alt="facebook" className="w-4 h-4" />
               </a>
               <a
                 href="#"
                 className="flex justify-center items-center w-10 h-10 p-2 rounded-full bg-[#828282] opacity-100"
               >
                 <img src={wpinterest} alt="pinterest" className="w-4 h-4 " />
               </a>
               <a
                 href="#"
                 className="flex justify-center items-center w-10 h-10 p-2 rounded-full bg-[#828282] opacity-100"
               >
                 <img src={winstagram} alt="instagram" className="w-4 h-4" />
               </a>
             </div>

            <div>
            <ul className="flex items-center space-x-10 mr-[10px] ">
            <li className="relative group">
              <Link to="/" className="flex items-center text-white text-[16px] font-medium transition-transform duration-300 hover:scale-[1.02] hover:text-green-500">
                Home <ChevronDown className="h-3 w-3 ml-1" />
              </Link>
            </li>
            
            <li className="relative group">
              <Link to="/about" className="flex items-center text-white text-[16px] font-medium transition-transform duration-300 hover:scale-[1.02] hover:text-green-500">
                About
              </Link>
            </li>

            <li className="relative group">
              <Link to="/service" className="flex items-center text-white text-[16px] font-medium transition-transform duration-300 hover:scale-[1.02] hover:text-green-500">
                Services <ChevronDown className="h-3 w-3 ml-1" />
              </Link>
              <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <ul className="py-2">
                  <li><Link to="#" className="block px-4 py-2 text-sm text-[#878680] hover:bg-gray-50 hover:text-[#1F1E17]">Service 1</Link></li>
                  <li><Link to="#" className="block px-4 py-2 text-sm text-[#878680] hover:bg-gray-50 hover:text-[#1F1E17]">Service 2</Link></li>
                  <li><Link to="#" className="block px-4 py-2 text-sm text-[#878680] hover:bg-gray-50 hover:text-[#1F1E17]">Service 3</Link></li>
                </ul>
              </div>
            </li>

            <li className="relative group">
              <Link to="/projects" className="flex items-center text-white text-[16px] font-medium transition-transform duration-300 hover:scale-[1.02] hover:text-green-500">
                Projects <ChevronDown className="h-3 w-3 ml-1" />
              </Link>
              <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <ul className="py-2">
                  <li><Link to="#" className="block px-4 py-2 text-sm text-[#878680] hover:bg-gray-50 hover:text-[#1F1E17]">Project 1</Link></li>
                  <li><Link to="#" className="block px-4 py-2 text-sm text-[#878680] hover:bg-gray-50 hover:text-[#1F1E17]">Project 2</Link></li>
                  <li><Link to="#" className="block px-4 py-2 text-sm text-[#878680] hover:bg-gray-50 hover:text-[#1F1E17]">Project 3</Link></li>
                </ul>
              </div>
            </li>

            <li className="relative group">
              <Link to="/news" className="flex items-center text-white text-[16px] font-medium transition-transform duration-300 hover:scale-[1.02] hover:text-green-500">
                News <ChevronDown className="h-3 w-3 ml-1" />
              </Link>
            </li>

            <li className="relative group">
              <Link to="/shop" className="flex items-center text-white text-[16px] font-medium transition-transform duration-300 hover:scale-[1.02] hover:text-green-500">
                Shop <ChevronDown className="h-3 w-3 ml-1" />
              </Link>
            </li>

            <li className="relative group">
              <Link to="/contact" className="flex items-center text-white text-[16px] font-medium transition-transform duration-300 hover:scale-[1.02] hover:text-green-500">
                Contact
              </Link>
            </li>
          </ul>
            </div>
            
            

            <div className=" flex items-end space-x-4 ">
            <div className="mx-4 h-10 w-px bg-[gray]" />
                        <button className="text-[#FFFFFF] hover:text-[#4BAF47] mb-[10px]">
                        
                          <Search size={24} />
                        </button>
                        <Link to="/cart" className="relative">
                          <ShoppingCart size={24} className="text-[#FFFFFF] hover:text-[#4BAF47] mb-[10px]" />
                          <span className="absolute -top-2 -right-2 bg-[#4BAF47] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                        </Link>
                      </div>
                      <div  className='  rounded-full border-2 border-yellow-500 p-3 w-12 h-12 flex items-center justify-center '>
                      <img src={ophone} alt="ophone" className="w-6 h-7" />
                      </div>
                      
             {/* КОНТАКТЫ (телефон) */}
             <div className="flex items-center gap-6">
               <div className="flex items-center gap-2">
                 <div className="flex flex-col leading-none">
                   <span className="text-xs  text-white">
                     Call anytime
                   </span>
                   <span className="text-sm font-semibold text-white">
                     +98 (000) - 9630
                   </span>
                 </div>
               </div>         
             </div>
           </header>
           <div className="w-full h-0.5 bg-[gray] my-4"></div>
           {/* Hero секция с большим текстом */}
           <div className="w-full max-w-[1200px] mx-auto px-4 mt-32 text-center">
             <div className="max-w-3xl mx-auto">
               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                 Natural Products
                 <br />
                 For Lovers of <span className="text-yellow-400">Healthy</span>
                 <br />
                 Organic Food
               </h1>
               <div className="mt-10">
                 <Link to="/shop" className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-md transition-colors">
                   Discover More
                 </Link>
               </div>
             </div>
           </div>

           {/* Кнопки навигации как на изображении
           <div className="absolute left-10 bottom-1/2 transform translate-y-1/2 z-20">
             <button className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center text-white mb-4">
               <ChevronDown className="h-6 w-6 transform rotate-90" />
             </button>
           </div>
           <div className="absolute right-10 bottom-1/2 transform translate-y-1/2 z-20">
             <button className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center text-white">
               <ChevronDown className="h-6 w-6 transform -rotate-90" />
             </button>
           </div> */}
         </div>
         </div>
  )
}

export default HHeader;