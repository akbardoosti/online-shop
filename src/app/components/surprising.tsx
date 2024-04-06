"use client";
import Link from "next/link";
import surpImage from '../../../public/images/surprising.webp';
import Image from "next/image";
import Product from "./product";
import { createContext, useEffect, useRef } from 'react';

import { A11y, Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Swiper from "swiper";

const Surprizing = (props: any) => {
    const swiperRef = useRef(null);
    useEffect(() => {
        if(swiperRef && swiperRef.current) {
            const swiper = new Swiper(swiperRef.current, {
                breakpoints: {
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 2,
                    },
                    570: {
                        slidesPerView: 3,
                        spaceBetween: 4,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 4,
                    },
                    990: {
                        slidesPerView: 5,
                        spaceBetween: 4,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 4,
                    },
                    1200: {
                        slidesPerView: 8,
                        spaceBetween: 4,
                    },
                  }
              });
        }
        
    }, []);

    return (
        <>
            <div className="flex justify-between">
                <div className="surprising-header flex items-center gap-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_15_7)">
                            <path d="M5 14.1667V17.5" stroke="#EDB226" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3.33333 15.8333H6.66666" stroke="#EDB226" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.1667 2.5V5.83333" stroke="#EDB226" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.5 4.16667H15.8333" stroke="#EDB226" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.41667 4.16667C5.41667 4.94022 5.72396 5.68209 6.27094 6.22907C6.81792 6.77605 7.55979 7.08334 8.33334 7.08334" stroke="#EDB226" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.33334 7.08333C7.55979 7.08333 6.81792 7.39062 6.27094 7.9376C5.72396 8.48458 5.41667 9.22645 5.41667 9.99999" stroke="#EDB226" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.41667 9.99999C5.41667 9.22645 5.10938 8.48458 4.56239 7.9376C4.01541 7.39062 3.27355 7.08333 2.5 7.08333" stroke="#EDB226" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2.5 7.08334C3.27355 7.08334 4.01541 6.77605 4.56239 6.22907C5.10938 5.68209 5.41667 4.94022 5.41667 4.16667" stroke="#EDB226" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.67416 13.1483C10.7122 13.1483 11.7078 12.7363 12.4422 12.0026C13.1766 11.269 13.5897 10.2739 13.5908 9.23584" stroke="#EDB226" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.5875 9.23584C13.5886 10.2732 14.0012 11.2677 14.7347 12.0012C15.4682 12.7347 16.4627 13.1472 17.5 13.1483" stroke="#EDB226" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17.5 13.1483C16.4627 13.1494 15.4682 13.562 14.7347 14.2955C14.0012 15.029 13.5886 16.0235 13.5875 17.0608" stroke="#EDB226" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.5875 17.0608C13.5864 16.0235 13.1738 15.029 12.4403 14.2955C11.7068 13.562 10.7123 13.1494 9.675 13.1483" stroke="#EDB226" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_15_7">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span className='site-font'>
                        هیجان انگیزهای امروز
                    </span>
                </div>
                <div className="continue">
                    <Link href={'next'} className="flex items-center gap-1">
                        <span className='site-font'>
                            مشاهده همه
                        </span>
                        <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 8L1 4.5L4 1" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </Link>
                </div>
            </div>
            <div className="w-full rounded-md bg-pink-100 mt-2">
                <SwiperComponent
                    ref={swiperRef}
                    modules={[Navigation]}
                    slidesPerView={5}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide style={{display:'flex'}}>
                        <div className="surprising-image">
                            <Image src={surpImage} alt="Surprising" className="w-20 sm:w-24 md:w-30 lg:w-48 h-auto" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide style={{display:'flex'}}>
                        <Product />
                    </SwiperSlide>
                    <SwiperSlide style={{display:'flex'}}><Product /></SwiperSlide>
                    <SwiperSlide style={{display:'flex'}}><Product /></SwiperSlide>
                    <SwiperSlide style={{display:'flex'}}><Product /></SwiperSlide>
                    <SwiperSlide style={{display:'flex'}}><Product /></SwiperSlide>
                    <SwiperSlide style={{display:'flex'}}><Product /></SwiperSlide>
                    <SwiperSlide style={{display:'flex'}}><Product /></SwiperSlide>
                    <SwiperSlide style={{display:'flex'}}><Product /></SwiperSlide>
                    <SwiperSlide style={{display:'flex'}}><Product /></SwiperSlide>
                    <SwiperSlide style={{display:'flex'}}><Product /></SwiperSlide>
                    <SwiperSlide style={{display:'flex'}}><Product /></SwiperSlide>
                    <SwiperSlide style={{display:'flex'}}><Product /></SwiperSlide>
                </SwiperComponent>
            </div>
        </>
    )
}

export default Surprizing;