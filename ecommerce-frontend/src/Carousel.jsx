import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Carousel = ({ media }) => (
  <Swiper spaceBetween={50} slidesPerView={1}>
    {media.map((item, index) => (
      <SwiperSlide key={index}>
        <img src={item.url} alt="Carousel Item" />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Carousel;
