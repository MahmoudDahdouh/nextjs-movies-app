'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import MovieItem from '../Movies/MovieItem'
import Link from 'next/link'
import TvShowItem from './TvShowItem'

const TvShowsSlider = () => {
  return (
    <Swiper
      className='slider-width-auto slides-start'
      slidesPerView={'auto'}
      spaceBetween={16}
    >
      <SwiperSlide style={{ maxWidth: '18rem' }}>
        <TvShowItem />
      </SwiperSlide>
      <SwiperSlide style={{ maxWidth: '18rem' }}>
        <TvShowItem />
      </SwiperSlide>
      <SwiperSlide style={{ maxWidth: '18rem' }}>
        <TvShowItem />
      </SwiperSlide>
      <SwiperSlide style={{ maxWidth: '18rem' }}>
        <TvShowItem />
      </SwiperSlide>
      <SwiperSlide style={{ maxWidth: '18rem' }}>
        <TvShowItem />
      </SwiperSlide>
    </Swiper>
  )
}
// <div className='item bg-red-200 w-40 h-40'>Item</div>
export default TvShowsSlider
