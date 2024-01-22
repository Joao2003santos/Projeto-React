// SwiperComponent.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide><a href='https://picsum.photos/200'></a></SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      {/* Adicione mais slides conforme necessário */}
    </Swiper>
  );
};

export default SwiperComponent;
