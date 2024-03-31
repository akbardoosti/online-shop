"use client"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/carousel.module.css';
import mainStyles from '../styles/main-slider.module.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import image1 from '../../../public/images/image1.jpg';
import image2 from '../../../public/images/image2.jpg';
const MainSlider =  () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Scrollbar, A11y, Autoplay, Navigation]}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      spaceBetween={30}
      className={styles.headerSlide}
      style={{marginTop: '20px'}}
    >
      <SwiperSlide style={{height: '300px'}} className={mainStyles.sliderItem}>
        <Image src={image1} alt='image 1' style={{height: '100%', width: '100%'}}/>
      </SwiperSlide>
      <SwiperSlide style={{height: '300px'}} className={mainStyles.sliderItem}>
        <Image src={image2} alt='image 1' style={{height: '100%', width: '100%'}}/>
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSlider;