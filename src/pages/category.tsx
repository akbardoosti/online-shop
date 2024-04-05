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
import { Pagination } from "flowbite-react";
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
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page: number) => setCurrentPage(page);

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
                            <button className='site-font border-none outline-none '>
                                فیلتر
                            </button>
                        </span>
                        <div className="sortby site-font">
                            <button className='site-font border-none outline-none '>
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
                        productList.map(item => {
                            return (
                                <div className="grow w-1/3 sm:w-3/12 md:w-2/12 self-center">
                                    <Product></Product>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex overflow-x-auto sm:justify-center">
                    <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange}/>
                </div>
            </div>
        </>
    )
}
CategoryPage.getLayout = function getLayout(page: React.ReactNode) {
    return <Layout>{page}</Layout>
}
export default CategoryPage;