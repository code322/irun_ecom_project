import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './ProductImages.scss';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';

SwiperCore.use([FreeMode, Navigation, Thumbs]);

interface Props {
	images: string[];
}
const ProductImages: React.FC<Props> = ({ images }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

	return (
		<>
			<Swiper
				spaceBetween={10}
				// navigation={true}
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
