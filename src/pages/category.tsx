import Link from "next/link";
import Layout from "@/app/components/layout";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Product from "@/app/components/product";
import {useState} from "react";
import {SimplePagination} from "@/app/components/circular-pagination";
import ProductFilter from "@/app/components/product-filter";
import SortByFilter from "@/app/components/sortby-filter";

const productList = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]

const CategoryPage = (props: any) => {
    const [isOpenFilterDrawer, setIsOpenFilterDrawer] = useState(false);
    const [isOpenSortByDrawer, setIsOpenSortByDrawer] = useState(false);
    function openFilterDrawer() {
        setIsOpenFilterDrawer(true)
    }
    function openSortByDrawer() {
        setIsOpenSortByDrawer(true)
    }
    function onCloseFilterDrawer(isClose: boolean) {
        setIsOpenFilterDrawer(isClose);
    }
    function onCloseSortByDrawer(isClose: boolean) {
        setIsOpenSortByDrawer(isClose);
    }
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
            <div className="products-container">
                <div className="flex justify-between border-b-2 border-gray-400">
                    <div className="filter-sortby flex gap-1">
                        <span className="filter">
                            <button
                                onClick={openFilterDrawer}
                                className='site-font border-none outline-none flex gap-1 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                  <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>
                                </svg>

                                فیلتر
                            </button>
                        </span>
                        <div className="sortby site-font">
                            <button
                                onClick={openSortByDrawer}
                                className='site-font border-none outline-none flex gap-1 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"/>
                                </svg>

                                مرتب سازی
                            </button>
                        </div>
                    </div>
                    <div className="founded-item site-font">
                        <span className="products-quantity text-gray-500">
                            84
                        </span>
                        <span>
                            کالا
                        </span>
                    </div>
                </div>
                <div className="product-list flex gap-2 flex-wrap justify-start my-3 border-b-2 border-gray-400 pb-4">
                    {
                        productList.map((item, index) => {
                            return (
                                <div key={`product_${index}`} className="grow w-full min-[400px]:w-1/3 md:w-3/12 lg:w-2/12 self-center">
                                    <Product></Product>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex overflow-x-auto justify-center">
                    <SimplePagination></SimplePagination>
                </div>
            </div>
            <ProductFilter isOpen={isOpenFilterDrawer} closeDrawer={onCloseFilterDrawer}/>
            <SortByFilter closeDrawer={onCloseSortByDrawer} isOpen={isOpenSortByDrawer}></SortByFilter>
        </>
    )
}
CategoryPage.getLayout = function getLayout(page: React.ReactNode) {
    return <Layout>{page}</Layout>
}
export default CategoryPage;