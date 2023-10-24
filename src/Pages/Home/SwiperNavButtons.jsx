import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()} className='btn btn-primary'>Prev</button>
      <button onClick={() => swiper.slideNext()} className='btn btn-primary'>Next</button>
    </div>
  );
};