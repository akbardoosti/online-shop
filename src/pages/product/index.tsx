import Link from "next/link";
import Layout from "@/app/components/layout/layout";
import productImage from '../../../public/images/product.png';
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Autoplay, Navigation, Scrollbar} from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const ProductPage = (props: any) => {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex gap-1 items-center">
                    <Link href='' className="site-font text-xs">
                        بهداشت و مراقبت مو
                    </Link>
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 1L1.17789 4.5959C0.940702 4.8191 0.940702 5.1809 1.17789 5.4041L5 9"
                              stroke="#BCB8B8" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <Link href='' className="site-font text-xs">
                        بهداشت و مراقبت مو
                    </Link>
                </div>

            </div>
            <div className="flex justify-center rounded-md border border-slate-300	min-h-[3rem] relative p-1">
                <div className="flex justify-between w-full absolute top-0 p-3 z-50">
                    <Link href=''>
                        <svg width="20" height="20" className='text-gray-400 hover:text-gray-800'
                             viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.7143 8.57143C18.0804 8.57143 20 6.65179 20 4.28571C20 1.91964 18.0804 0 15.7143 0C13.3482 0 11.4286 1.91964 11.4286 4.28571C11.4286 4.46429 11.4375 4.64286 11.4598 4.81696L7.25893 6.91518C6.49107 6.16964 5.44196 5.71429 4.28571 5.71429C1.91964 5.71429 0 7.63393 0 10C0 12.3661 1.91964 14.2857 4.28571 14.2857C5.44196 14.2857 6.49107 13.8304 7.25893 13.0848L11.4598 15.183C11.4375 15.3571 11.4286 15.5312 11.4286 15.7143C11.4286 18.0804 13.3482 20 15.7143 20C18.0804 20 20 18.0804 20 15.7143C20 13.3482 18.0804 11.4286 15.7143 11.4286C14.558 11.4286 13.5089 11.8839 12.7411 12.6295L8.54018 10.5312C8.5625 10.3571 8.57143 10.183 8.57143 10C8.57143 9.81696 8.5625 9.64286 8.54018 9.46875L12.7411 7.37054C13.5089 8.11607 14.558 8.57143 15.7143 8.57143Z"
                                fill="#BFBFBF"/>
                        </svg>
                    </Link>
                    <Link href=''>
                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.5041 16.7427C10.7831 17.3525 9.7169 17.3525 8.9959 16.7427C6.08865 14.2835 2.60424 11.5686 1.35399 8.01987C0.66709 6.07012 0.95212 3.8064 2.45298 2.30568C4.59944 0.159444 8.21385 0.512904 10.1635 4.46234C10.1983 4.53271 10.3017 4.53271 10.3365 4.46234C12.2861 0.512904 15.9006 0.159444 18.047 2.30568C19.5479 3.8064 19.8329 6.07012 19.146 8.01987C17.8958 11.5686 14.4113 14.2835 11.5041 16.7427Z"
                                stroke="#A4A1A1" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </Link>
                </div>


                <Swiper
                    // install Swiper modules
                    modules={[Scrollbar, A11y, Autoplay, Navigation]}
                    slidesPerView={1}
                    className={`flex justify-center`}
                    style={{marginTop: '20px'}}
                >
                    <SwiperSlide style={{height: '300px'}}>
                        <Image src={productImage} alt='image 1' className={'mx-auto'}/>
                    </SwiperSlide>
                    <SwiperSlide style={{height: '300px'}}>
                        <Image src={productImage} alt='image 1' className={'mx-auto'}/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="flex gap-3 my-2">
                <div className="w-12 h-12 bg-amber-100 rounded"></div>
                <div className="w-12 h-12 bg-amber-100 rounded"></div>
                <div className="w-12 h-12 bg-amber-100 rounded"></div>
                <div className="w-12 h-12 bg-amber-100 rounded"></div>
                <div className="w-12 h-12 bg-amber-100 rounded"></div>
                <div className="w-12 h-12 bg-amber-100 rounded"></div>
            </div>
            <h4 className='site-font font-bold'>سرم مو نئودرم حاوی روغن آرگان حجم 100 میل</h4>
            <hr className='py-1 block mt-2'/>
            <p className='site-font'>
                سرم‌ مو یکی از ترمیم کننده‌های پرطرفدار مو است که برای تقویت انواع موها با ویژگی‌های مختلف مورد استفاده
                قرار می‌گیرد. اکثر افراد فکر می‌کنند سرم مو فقط مناسب موهای وز و شکننده است اما باید بدانید که سرم موهای
                متنوعی در بازار وجود دارند.
            </p>
            <br/>

            <div>
                <h4 className='site-font font-bold'>
                    امتیاز کاربران
                </h4>
                <hr className='py-1 block mt-2'/>
                <div className='flex gap-4 flex-col sm:flex-row'>
                    <div className="w-full sm:w-2/4 quality flex items-center felx-col sm:flex-row justify-between">
                        <h5 className='site-font font-bold text-sm'>کیفیت</h5>
                        <div className="flex items-center" dir='ltr'>
                            <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="valueable w-full sm:w-2/4 quality flex items-center felx-col sm:flex-row justify-between">
                        <h5 className='site-font font-bold text-sm'>ارزش خرید نسبت به قیمت</h5>
                        <div className="flex items-center" dir='ltr'>
                            <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path
                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                        </div>
                    </div>

                </div>
                <div className="w-full h-28"></div>
                <div className="fixed bottom-0 w-full bg-white flex flex-col shadow-lg right-0 px-4 py-2 gap-1">
                    <div className="flex justify-between items-center">
                        <div className="site-font price-label">
                            قیمت
                        </div>
                        <div className="price flex w-full justify-end site-font text-sm">
                            <div className="regular-price text-gray-600">
                                1500 تومان
                            </div>
                            <div className="price-off text-red-600">
                                25%
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="site-font price-label text-orange-600 text-sm w-full">
                            تنها 4 عدد باقی مانده است
                        </div>
                        <div className="price flex w-full justify-end site-font text-sm line-through">
                            5000 تومان
                        </div>
                    </div>
                    <button className="site-font text-sm rounded bg-red-600 text-white p-1">
                        افزودن به سبد خرید
                    </button>
                </div>
            </div>
        </>
    )
}
ProductPage.getLayout = function getLayout(page: React.ReactNode) {
    return <Layout>{page}</Layout>
}
export default ProductPage;