
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';





import image1 from "../../assets/images/banner/1.jpg";
import image2 from "../../assets/images/banner/2.jpg";
import image3 from "../../assets/images/banner/3.jpg";
import image4 from "../../assets/images/banner/4.jpg";
// import { SwiperNavButtons } from "./SwiperNavButtons";

const Reviews = () => {
  return (
    <div>
      <Swiper
       modules={[Navigation, Pagination, A11y]}
       pagination={{ clickable: true }}
       navigation={{ clickable: true }}
       
       spaceBetween={30}
       slidesPerView="auto"
      >
        <SwiperSlide>
          <img
            src={image1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image3}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image4}
            alt=""
          />
        </SwiperSlide>
      {/* <SwiperNavButtons></SwiperNavButtons> */}
      </Swiper>
    </div>
  );
};

export default Reviews;
