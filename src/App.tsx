// import Swiper core and required modules
import { Keyboard, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import SlideButton from "./components/button/SlideButton";
import Card from "./components/card/Card";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./App.css";
import HomeLayout from "./components/layout/HomeLayout";

export default () => {
  return (
    <HomeLayout>
      <div>
        <Swiper
          allowSlidePrev={true}
          allowSlideNext={true}
          centeredSlides={true}
          direction="vertical"
          grabCursor={true}
          keyboard={true}
          loop={true}
          modules={[Navigation, Pagination, Scrollbar, Keyboard]}
          navigation={{
            enabled: true,
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={0}
          speed={800}
          slidesPerView={3}
        >
          {[1, 2, 3, 4, 5, 6].map((num, idx) => (
            <SwiperSlide key={idx}>
              <Card index={num} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div style={{ marginTop: "20px", position: "relative", height: "50px" }}>
          <SlideButton isNext={false} />
          <SlideButton isNext={true} />
        </div>
      </div>
    </HomeLayout>
  );
};