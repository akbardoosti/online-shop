import Image from 'next/image';
import losion from '../../../public/images/losion1.webp';
import Link from 'next/link';

const Product = (props: any) => {
    return (
        <Link href='/product' className='flex flex-col grow'>
            <div className="flex flex-col grow w-full bg-stone-100	drop-shadow-xl items-center py-2 px-3">
                <Image src={losion} alt='Product image' className='w-20 h-auto'/>
                
                <div>
                    <span style={{fontFamily: 'Yekan'}} className='text-xs text-zinc-500'>
                    شامپو تقویتی و ضد ریزش مو مخصوص خانم ها سینره 250 میل
                    </span>
                    <br/>
                    <span style={{fontFamily: 'Yekan'}} className='stock text-orange-700 text-[10px] w-full'>تنها 4 عدد باقی مانده است</span>
                    <div className="product-footer flex justify-between">
                        <button>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                shapeRendering="geometricPrecision" 
                                textRendering="geometricPrecision" 
                                imageRendering="optimizeQuality" 
                                fillRule="evenodd" 
                                width='24px'
                                height='24px'
                                clipRule="evenodd" viewBox="0 0 512 512">
                                <path 
                                    fillRule="nonzero" 
                                    d="M73.31 114.66h84.97V97.37c0-26.79 10.95-51.14 28.59-68.77C204.51 10.96 228.86 0 255.65 0s51.15 10.96 68.78 28.6c17.64 17.63 28.6 41.98 28.6 68.77v17.29h85.66c5.14 0 9.8 2.13 13.16 5.49l.91 1.02c2.85 3.29 4.58 7.58 4.58 12.15v311.75c0 18.37-7.54 35.12-19.68 47.25-12.13 12.13-28.88 19.68-47.25 19.68H121.58c-18.33 0-35.08-7.55-47.24-19.7-12.14-12.1-19.68-28.83-19.68-47.23V133.32c0-5.14 2.1-9.82 5.47-13.19 3.36-3.36 8.04-5.47 13.18-5.47zm169.92 162.15c0-7.05 5.72-12.77 12.77-12.77s12.77 5.72 12.77 12.77v41.25h41.24c7.04 0 12.76 5.71 12.76 12.76s-5.72 12.77-12.76 12.77h-41.24v41.24c0 7.05-5.72 12.77-12.77 12.77s-12.77-5.72-12.77-12.77v-41.24h-41.24c-7.05 0-12.77-5.72-12.77-12.77s5.72-12.76 12.77-12.76h41.24v-41.25zm-61.21-162.15h147.27V97.37c0-20.23-8.29-38.64-21.64-51.99-13.35-13.34-31.76-21.64-52-21.64-20.23 0-38.65 8.3-51.99 21.64-13.35 13.35-21.64 31.76-21.64 51.99v17.29zm-23.74 46.06v-22.29H78.42v306.64c0 11.85 4.87 22.63 12.7 30.46 7.8 7.85 18.6 12.7 30.46 12.7h268.83c11.82 0 22.62-4.88 30.45-12.71 7.83-7.83 12.72-18.63 12.72-30.45V138.43h-80.55v22.54c8.81 4.48 14.85 13.63 14.85 24.18 0 14.99-12.15 27.13-27.13 27.13-14.98 0-27.14-12.14-27.14-27.13 0-10.88 6.42-20.27 15.68-24.59v-22.13H182.02v22.38c8.98 4.42 15.17 13.65 15.17 24.34 0 14.99-12.14 27.13-27.13 27.13-14.98 0-27.12-12.14-27.12-27.13 0-10.75 6.25-20.05 15.34-24.43z" />
                            </svg>
                        </button> 
                        <div className="flex flex-col">
                            <span className='sale-price site-font line-through text-red-600 text-[10px]'>55000 تومان</span>
                            <span className="main-price text-[12px] site-font">24000 تومان</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </Link>
    )
}

export default Product;