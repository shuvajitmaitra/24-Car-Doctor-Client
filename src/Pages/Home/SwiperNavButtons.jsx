import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flex justify-between">
      <button
        onClick={() => swiper.slidePrev()}
        className="text-5xl bg-white rounded-full text-zinc-500 hover:text-[#FF3811]"
      >
        <BsArrowLeftCircleFill />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="text-5xl bg-white rounded-full text-zinc-500 hover:text-[#FF3811]"
      >
        <BsArrowRightCircleFill />
      </button>
    </div>
  );
};
