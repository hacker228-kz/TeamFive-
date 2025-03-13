import React from 'react'
import { ChevronDown, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import section from '../../assets/images/section.png';

const Navbar = () => {
    return (
        <div>
            <nav 
                className="w-full  flex justify-center px-[10px]"
                style={{ backgroundImage: `url(${section})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="w-[1170px] max-w-full flex items-center justify-between py-5">
                    <ul className="flex items-center justify-around space-x-8">
                        <li className="relative group">
                            <Link to="/" className="flex items-center text-[rgba(31,30,23,1)] font-medium hover:text-[rgba(75,175,71,1)] transition-colors">
                                Home  <ChevronDown className="h-3 w-3 ml-1" />
                            </Link>
                        </li>
                        <li className="relative group">
                            <Link to="#" className="flex items-center text-[rgba(31,30,23,1)] font-medium hover:text-[rgba(75,175,71,1)] transition-colors">
                                About
                            </Link>
                        </li>
                        <li className="relative group">
                            <Link to="#" className="flex items-center text-[rgba(31,30,23,1)] font-medium hover:text-[rgba(75,175,71,1)] transition-colors">
                                Services <ChevronDown className="h-3 w-3 ml-1" />
                            </Link>
                            <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                <ul className="py-2">
                                    <li><Link to="#" className="block px-4 py-2 text-sm text-[rgba(31,30,23,1)] hover:bg-gray-50 hover:text-[rgba(75,175,71,1)]">Service 1</Link></li>
                                    <li><Link to="#" className="block px-4 py-2 text-sm text-[rgba(31,30,23,1)] hover:bg-gray-50 hover:text-[rgba(75,175,71,1)]">Service 2</Link></li>
                                    <li><Link to="#" className="block px-4 py-2 text-sm text-[rgba(31,30,23,1)] hover:bg-gray-50 hover:text-[rgba(75,175,71,1)]">Service 3</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="relative group">
                            <Link to="#" className="flex items-center text-[rgba(31,30,23,1)] font-medium hover:text-[rgba(75,175,71,1)] transition-colors">
                                Projects <ChevronDown className="h-3 w-3 ml-1" />
                            </Link>
                            <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                <ul className="py-2">
                                    <li><Link to="#" className="block px-4 py-2 text-sm text-[rgba(31,30,23,1)] hover:bg-gray-50 hover:text-[rgba(75,175,71,1)]">Project 1</Link></li>
                                    <li><Link to="#" className="block px-4 py-2 text-sm text-[rgba(31,30,23,1)] hover:bg-gray-50 hover:text-[rgba(75,175,71,1)]">Project 2</Link></li>
                                    <li><Link to="#" className="block px-4 py-2 text-sm text-[rgba(31,30,23,1)] hover:bg-gray-50 hover:text-[rgba(75,175,71,1)]">Project 3</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="relative group">
                            <Link to="#" className="flex items-center text-[rgba(31,30,23,1)] font-medium hover:text-[rgba(75,175,71,1)] transition-colors">
                                News  <ChevronDown className="h-3 w-3 ml-1" />
                            </Link>
                        </li>
                        <li className="relative group">
                            <Link to="#" className="flex items-center text-[rgba(31,30,23,1)] font-medium hover:text-[rgba(75,175,71,1)] transition-colors">
                                Shop  <ChevronDown className="h-3 w-3 ml-1" />
                            </Link>
                        </li>
                        <li className="relative group">
                            <Link to="#" className="flex items-center text-[rgba(31,30,23,1)] font-medium hover:text-[rgba(75,175,71,1)] transition-colors">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="flex items-center space-x-4">
                        <button className="text-[rgba(31,30,23,1)] hover:text-[rgba(75,175,71,1)] transition-colors">
                            <Search size={24} />
                        </button>
                        <Link to="#" className="relative text-[rgba(31,30,23,1)] hover:text-[rgba(75,175,71,1)] transition-colors">
                            <ShoppingCart size={24} />
                            <span className="absolute -top-2 -right-2 bg-[rgba(75,175,71,1)] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
