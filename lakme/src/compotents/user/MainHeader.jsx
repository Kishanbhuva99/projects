import React from 'react'
import { useState } from 'react';
import '../../styles/style.css';

import { FaAngleDown } from "react-icons/fa";



const Mainheader = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };
    return (
        <header className="w-full shadow sticky top-0 bg-white z-50">
            {/* Top bar */}
            <div className="header-inner flex justify-between items-center p-2 bg-black">
                <div className="site-logo flex justify-end">
                    <a href="index.html">
                        <img src="lakme_Logo.png" alt="Lakme Logo" className="w-[150px] img-clr" />
                    </a>
                </div>
                <div className="header-icons flex gap-4 p-2">
                    {/* Search */}
                    <button onClick={() => setIsSearchOpen(true)} className="text-white btn-icons">
                        <svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                            stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M22 22L20 20" stroke="white" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                    </svg>
                    </button>
                    {/* Account */}
                    <a href="log_in.html" className="text-white btn-icons">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.72 11.28 8.72 9.50998C8.72 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
                            stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.4 22.0001 7.04 21.0101 5.26 19.3801C5.36 18.4401 5.96 17.5201 7.03 16.8001C9.77 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
                            stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    </a>
                    {/* Cart */}
                    <button className="text-white btn-icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20"
                        viewBox="0 0 16 20" fill="none">
                        <path
                            d="M16 17.0515L14.1818 6.39432C14.1091 6.03908 13.8182 5.79041 13.4545 5.79041H12.3636V4.26288C12.3636 1.9183 10.4 0 8 0C5.6 0 3.63636 1.9183 3.63636 4.26288V5.79041H2.54545C2.18182 5.79041 1.89091 6.03908 1.81818 6.39432L0 17.0515C0 17.087 0 17.1226 0 17.1581C0 18.7211 1.30909 20 2.90909 20H13.0909C14.6909 20 16 18.7211 16 17.1581C16 17.1226 16 17.087 16 17.0515ZM5.09091 4.26288C5.09091 2.69982 6.4 1.42096 8 1.42096C9.6 1.42096 10.9091 2.69982 10.9091 4.26288V5.79041H5.09091V4.26288ZM13.0909 18.579H2.90909C2.10909 18.579 1.49091 17.9751 1.45455 17.1936L3.16364 7.21137H12.8364L14.5455 17.1936C14.5091 17.9751 13.8909 18.579 13.0909 18.579Z"
                            fill="white"></path>
                        <path
                            d="M10.1817 8.63232H5.81809C5.41809 8.63232 5.09082 8.95204 5.09082 9.3428C5.09082 9.73357 5.41809 10.0533 5.81809 10.0533H10.1817C10.5817 10.0533 10.909 9.73357 10.909 9.3428C10.909 8.95204 10.5817 8.63232 10.1817 8.63232Z"
                            fill="white"></path>
                    </svg>
                    </button>
                </div>
            </div>

            {/* Navigation */}
            <nav className="bg-white border-t border-gray-200">
                <div className="mx-auto w-4/5 flex justify-between py-3 text-gray-800 text-lg">
                    {/* CATEGORIES */}
                    <div className="relative">
                        <button onClick={() => toggleDropdown('categories')} className="hover:text-black flex items-center gap-1">
                            CATEGORIES <FaAngleDown />
                        </button>
                        {activeDropdown === 'categories' && (
                            <ul className="absolute bg-white shadow-md mt-2 w-50 z-10">
                                {['LIPS', 'EYES', 'FACE', 'NAILS', 'SKINCARE', 'SHOP BY CONCERN', 'COMBOS'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <a href="#" className="hover:text-black">TRENDING NOW</a>

                    {/* ORDERS */}
                    <div className="relative">
                        <button onClick={() => toggleDropdown('orders')} className="hover:text-black flex items-center gap-1">
                            ORDERS <FaAngleDown />
                        </button>
                        {activeDropdown === 'orders' && (
                            <ul className="absolute bg-white shadow-md mt-2 w-40 z-10">
                                {['Track Orders', 'Cancel Orders'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* HELP */}
                    <div className="relative">
                        <button onClick={() => toggleDropdown('help')} className="hover:text-black flex items-center gap-1">
                            HELP <FaAngleDown />
                        </button>
                        {activeDropdown === 'help' && (
                            <ul className="absolute bg-white shadow-md mt-2 w-40 z-10">
                                {['Join the Club', 'Contact Us'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <a href="#" className="hover:text-black">MY WISHLIST</a>
                </div>
            </nav>

            {/* Search Modal */}
            {isSearchOpen && (
                <div className="fixed w-full top-30 z-50">
                    <div className="bg-white rounded shadow-md py-4 px-4 w-3/4 mx-auto flex items-center gap-4 relative">
                        <input
                            type="text"
                            placeholder="Search here"
                            className="w-full border-b-2 outline-0 p-2"
                        />
                        <button
                            onClick={() => setIsSearchOpen(false)}
                            className="text-black font-bold hover:scale-150 hover:text-red-500 transition duration-500 ease-in-out"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Mainheader