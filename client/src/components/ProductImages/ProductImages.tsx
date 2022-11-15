import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import './ProductImages.scss';
import SwiperCore, { Navigation, Thumbs, Pagination } from 'swiper/core';

SwiperCore.use([Navigation, Thumbs, Pagination]);

interface Props {
  images: string[];
}
const ProductImages: React.FC<Props> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  return (
    <>
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        className='mySwiper2'
      >
        {images.map((i, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={i} alt='' />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        // modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'
      >
        {images.map((i, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={i} alt='' />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ProductImages;
