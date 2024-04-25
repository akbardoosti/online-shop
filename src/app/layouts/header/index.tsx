"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import MenuSlide from '../../components/menu-slide';
import Search from '../../components/search';
import LoginPanel from '../../components/login-panel';

const Header: React.FC<{}> = ((router) => {
    const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);
    const toggleSlideOver = () => {
        setIsSlideOverOpen(!isSlideOverOpen);
    };
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const toggleMenu = () => {
        setIsSearchOpen(!isSearchOpen);
    }
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const toggleLoginPanel = () => {
        let isLoggedIn = localStorage.getItem('access_token');
        if (!isLoggedIn) {
            setIsLoginOpen(!isLoginOpen);
        }
    }
    return (
        <>
            <div className="flex grow items-center space-x-4">
                <div>
                    <button 
                        className="menu-btn"
                        onClick={toggleSlideOver}    
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-600 hover:text-gray-900"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
                <div>
                    <button 
                        className='search-btn'
                        onClick={toggleMenu}
                    >
                        <svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="-48.84 -48.84 586.08 586.08" stroke="#000000" strokeWidth="17.093999999999998" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path> </g> </g> </g></svg>
                    </button>
                </div>
            </div>
            <div className="text-xl grow font-bold text-gray-800">
                <Link href="/">
                    <strong>Beauty</strong>
                </Link>
            </div>
            <div className="flex items-center">
                <div>
                    <button onClick={toggleLoginPanel}>
                        <svg fill="none" viewBox="0 0 20 25" width="20px" height="20px">
                            <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.143 6.111a5.095 5.095 0 0 1-1.507 3.614A5.159 5.159 0 0 1 10 11.222a5.16 5.16 0 0 1-3.637-1.497 5.095 5.095 0 0 1-1.506-3.614c0-1.355.542-2.655 1.506-3.614A5.16 5.16 0 0 1 10 1c1.364 0 2.672.538 3.636 1.497a5.095 5.095 0 0 1 1.507 3.614ZM10 15.056a9.028 9.028 0 0 0-6.364 2.62A8.917 8.917 0 0 0 1 24h18a8.917 8.917 0 0 0-2.636-6.325A9.029 9.029 0 0 0 10 15.055Z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div>
                    <Link href='/cart'>
                        <svg className="w-8 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                        </svg>
                    </Link>
                </div>
            </div>
            <MenuSlide isOpen={isSlideOverOpen} onClose={toggleSlideOver} />
            <Search isOpen={isSearchOpen} onClose={toggleMenu} />
            <LoginPanel isOpen={isLoginOpen} onClose={toggleLoginPanel} router={router} />
        </>
    )
})

export default Header