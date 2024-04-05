import Layout from "@/app/components/layout";
import Image from "next/image";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Head from "next/head";
import cartImage from '../../public/images/cart-item.png';

const ProductPage = (props: any) => {
    return (
        <>
            <Head>
                <title>سبد خرید</title>
            </Head>
            <div className="flex flex-col">
                <div className="cart-header flex justify-between border-b-2 border-gray-600">
                    <span className='site-font text-gray-500'>
                        سبد خرید
                        <span className='text-orange-500'>5</span>
                        کالا
                    </span>
                    <span className='site-font flex gap-1 items-center text-sm'>
                        <button>
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.90909 4.93513L2.43333 9.96061C2.54785 11.2238 3.81245 12.2 5.33417 12.2H8.66581C10.1876 12.2 11.4521 11.2238 11.5667 9.96061L12.0909 4.93513"
                                    stroke="#FF8888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4.81818 6.75136V9.77838" stroke="#FF8888" strokeWidth="1.5"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M7 6.14595V10.3838" stroke="#FF8888" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M9.18182 6.75136V9.77838" stroke="#FF8888" strokeWidth="1.5"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M1 3.11893H13" stroke="#FF8888" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path
                                    d="M9.72727 3.11892V2.81622C9.72727 1.81315 8.75047 1 7.54545 1H6.45454C5.24956 1 4.27272 1.81315 4.27272 2.81622V3.11892"
                                    stroke="#FF8888" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                        </button>

                        خالی کردن سبد خرید
                    </span>
                </div>
                <div className="items-list my-3 p-2">
                    <div className="flex gap-4 cart-item pb-2">
                        <div className="w-20 sm:w-24 md:w-28 lg:w-32 flex items-center">
                            <Image src={cartImage} alt='cart image'/>
                        </div>
                        <div className="w-full flex flex-col">
                            <h5 className='site-font text-gray-700 text-sm'>کرم پودر مات کالیستا مناسب انواع پوست حجم 35
                                میل</h5>
                            <span className='site-font text-orange-500 text-[0.7rem]'>
                            تنها 4 عدد باقی مانده است
                        </span>
                        <span className='site-font flex gap-1 items-center text-[0.7rem]'>
                            <span className="rounded-full w-3 h-3 bg-yellow-600 block"></span>
                            شماره M11 (بژ)
                        </span>
                        <span className='flex gap-2 text-gray-400 text-sm site-font items-center text-[0.7rem]'>
                            <span>
                                32،610
                            </span>
                            <span>
                                تومان تخفیف
                            </span>
                        </span>
                        <span className='flex gap-2 text-gray-400 text-sm site-font items-center justify-between text-[0.7rem]'>
                            <div className="item-price">
                                <span>
                                    293،490
                                </span>
                                <span>
                                    تومان
                                </span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <span className="trash">
                                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.90909 4.93513L2.43333 9.96061C2.54785 11.2238 3.81245 12.2 5.33417 12.2H8.66581C10.1876 12.2 11.4521 11.2238 11.5667 9.96061L12.0909 4.93513"
                                            stroke="#FF8888" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path d="M4.81818 6.75136V9.77838" stroke="#FF8888" strokeWidth="1.5"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M7 6.14595V10.3838" stroke="#FF8888" strokeWidth="1.5"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9.18182 6.75136V9.77838" stroke="#FF8888" strokeWidth="1.5"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M1 3.11892H13" stroke="#FF8888" strokeWidth="1.5" strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                        <path
                                            d="M9.72727 3.11892V2.81622C9.72727 1.81315 8.75047 1 7.54545 1H6.45454C5.24956 1 4.27272 1.81315 4.27272 2.81622V3.11892"
                                            stroke="#FF8888" strokeWidth="1.5" strokeLinecap="round"/>
                                    </svg>

                                </span>
                                <div
                                    className="item-quantity flex rounded-lg border-2 overflow-hidden border-gray-400 items-center h-7">
                                    <span className='p-1 border h-full flex items-center'>
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                             xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px"
                                             height="20px" viewBox="0 0 122.875 122.648"
                                             enableBackground="new 0 0 122.875 122.648" xmlSpace="preserve"

                                        >
                                        <g>
                                            <path
                                                fill='#ccc'
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M108.993,47.079c7.683-0.059,13.898,6.12,13.882,13.805 c-0.018,7.683-6.26,13.959-13.942,14.019L75.24,75.138l-0.235,33.73c-0.063,7.619-6.338,13.789-14.014,13.78 c-7.678-0.01-13.848-6.197-13.785-13.818l0.233-33.497l-33.558,0.235C6.2,75.628-0.016,69.448,0,61.764 c0.018-7.683,6.261-13.959,13.943-14.018l33.692-0.236l0.236-33.73C47.935,6.161,54.209-0.009,61.885,0 c7.678,0.009,13.848,6.197,13.784,13.818l-0.233,33.497L108.993,47.079L108.993,47.079z"/></g></svg>

                                    </span>
                                    <input type="number" className='w-10 h-full border-none outline-none'/>
                                    <span className='p-1 border h-full flex items-center'>
                                         <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px"
                                              height="20px" viewBox="0 0 122.881 9.737"
                                              enableBackground="new 0 0 122.881 9.737" xmlSpace="preserve"><g><path
                                             d="M117.922,0.006C117.951,0.002,117.982,0,118.012,0c0.656,0,1.285,0.132,1.861,0.371c0.014,0.005,0.025,0.011,0.037,0.017 c0.584,0.248,1.107,0.603,1.543,1.039c0.881,0.88,1.428,2.098,1.428,3.441c0,0.654-0.133,1.283-0.371,1.859 c-0.248,0.6-0.609,1.137-1.057,1.583c-0.445,0.445-0.98,0.806-1.58,1.055v0.001c-0.576,0.238-1.205,0.37-1.861,0.37 c-0.029,0-0.061-0.002-0.09-0.006c-37.654,0-75.309,0.001-112.964,0.001c-0.029,0.004-0.059,0.006-0.09,0.006 c-0.654,0-1.283-0.132-1.859-0.371c-0.6-0.248-1.137-0.609-1.583-1.056C0.981,7.865,0.621,7.33,0.372,6.73H0.371 C0.132,6.154,0,5.525,0,4.869C0,4.215,0.132,3.586,0.371,3.01c0.249-0.6,0.61-1.137,1.056-1.583 c0.881-0.881,2.098-1.426,3.442-1.426c0.031,0,0.061,0.002,0.09,0.006C42.613,0.006,80.268,0.006,117.922,0.006L117.922,0.006z"/></g></svg>

                                    </span>
                                </div>
                            </div>

                        </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-info mt-5 p-3 rounded-lg border-2 border-gray-300">
                <div className="flex flex-col gap-3">
                    <div className="site-font info-row flex justify-between items-center">
                        <span className="info-label text-sm font-bold text-gray-800 flex flex-col">
                            <span>
                                قیمت کالاها
                            </span>
                            <div className="total-quantity">
                                2 کالا
                            </div>
                        </span>
                        <span>
                            652،200
                            تومان
                        </span>
                    </div>
                    <div className="site-font info-row flex justify-between">
                        <span className="info-label text-sm font-bold text-gray-800 flex gap-1">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.9978 18.5363C7.99283 19.0013 6.79901 18.6265 6.24012 17.6706L5.99272 17.2474C5.68475 16.7206 5.16736 16.3495 4.56962 16.2268L4.02665 16.1154C2.93517 15.8913 2.19598 14.8702 2.32399 13.7633L2.37394 13.3313C2.44271 12.7367 2.26036 12.1403 1.87079 11.6858L1.51738 11.2735C0.825191 10.466 0.827832 9.27359 1.52359 8.46909L1.86392 8.07559C2.25767 7.62032 2.44244 7.0208 2.37329 6.42287L2.32399 5.99654C2.19598 4.88968 2.93517 3.86856 4.02665 3.64448L4.56541 3.53387C5.16559 3.41066 5.68465 3.03712 5.99212 2.50714L6.24245 2.07564C6.79953 1.11541 7.99628 0.737505 9.0038 1.20366L9.3502 1.36396C9.9227 1.62883 10.5826 1.62883 11.1551 1.36396L11.5117 1.19897C12.5149 0.734785 13.7067 1.10739 14.2668 2.06038L14.5356 2.51769C14.8435 3.04138 15.3585 3.41034 15.9534 3.53328L16.4817 3.64247C17.5719 3.86776 18.3095 4.88818 18.1816 5.99396L18.132 6.42287C18.0629 7.0208 18.2477 7.62032 18.6414 8.07559L18.9817 8.46909C19.6775 9.27359 19.6801 10.466 18.988 11.2735L18.6345 11.6858C18.245 12.1403 18.0626 12.7367 18.1314 13.3313L18.1816 13.7659C18.3095 14.8717 17.5719 15.8921 16.4817 16.1174L15.9492 16.2274C15.3568 16.3499 14.8434 16.7163 14.5351 17.2368L14.2691 17.6858C13.7072 18.6346 12.5184 19.0041 11.5176 18.541L11.1551 18.3733C10.5826 18.1084 9.9227 18.1084 9.3502 18.3733L8.9978 18.5363Z"
                                    stroke="#858484" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M13.25 6.87L7.25 12.87" stroke="#858484" strokeWidth="1.5" strokeLinecap="round"/>
                                <path
                                    d="M7.25 7.87C7.80228 7.87 8.25 7.42228 8.25 6.87C8.25 6.31771 7.80228 5.87 7.25 5.87C6.69772 5.87 6.25 6.31771 6.25 6.87C6.25 7.42228 6.69772 7.87 7.25 7.87Z"
                                    stroke="#858484" strokeWidth="1.5" strokeLinejoin="round"/>
                                <path
                                    d="M13.25 13.87C13.8023 13.87 14.25 13.4223 14.25 12.87C14.25 12.3177 13.8023 11.87 13.25 11.87C12.6977 11.87 12.25 12.3177 12.25 12.87C12.25 13.4223 12.6977 13.87 13.25 13.87Z"
                                    stroke="#858484" strokeWidth="1.5" strokeLinejoin="round"/>
                            </svg>

                            <span className='text-[0.7rem] text-gray-400'>
                                مجموع تخفیف روی کالاها
                            </span>
                        </span>
                        <span className='text-[0.7rem] text-gray-400'>
                            65،200
                            تومان
                        </span>
                    </div>
                    <div className="site-font info-row flex justify-between">
                        <span className="info-label text-sm font-bold text-gray-800 ">
                            <span>
                                سود شما از خرید
                            </span>
                        </span>
                        <span className='flex gap-2'>
                            <span className="text-green-500">
                                (10%)
                            </span>
                            <span className="text-sm">
                                65،200
                            تومان
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="block h-28"></div>
            <div className="fixed min-h-10 bottom-0 left-0 bg-white w-full drop-shadow-lg p-3">
                <div className="flex justify-between">
                    <div className="flex items-center justify-center ">
                        <button className="bg-red-600 text-white text-sm site-font py-2 px-4 rounded min-w-28">
                            ورود و ادامه
                        </button>
                    </div>
                    <div className="site-font flex flex-col w-full items-end">
                        <span>
                            جمع مبلغ قابل پرداخت
                        </span>
                        <span>
                            5000 تومان
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
ProductPage.getLayout = function getLayout(page: React.ReactNode) {
    return <Layout>{page}</Layout>
}
export default ProductPage;