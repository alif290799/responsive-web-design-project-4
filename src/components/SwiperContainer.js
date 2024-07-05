import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SwiperContainer = ({ children }) => {
  return (
    <div className="overflow-hidden px-5">
      <Swiper
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          // when window width is >= 640px (sm)
          400: {
            slidesPerView: 2,
          },
          // when window width is >= 768px (md)
          768: {
            slidesPerView: 3,
          },
          // when window width is >= 1024px (lg)
          1024: {
            slidesPerView: 4,
          },
        }}
        className="flex items-center"
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperContainer;
