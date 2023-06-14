'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import MovieItem from './MovieItem'

const MovieSlider = () => {
  return (
    <Swiper
      className='slider-width-auto slides-start'
      slidesPerView={'auto'}
      spaceBetween={16}
    >
      <SwiperSlide className='max-w-[15rem]'>
        <MovieItem />
      </SwiperSlide>
      <SwiperSlide className='max-w-[15rem]'>
        <MovieItem />
      </SwiperSlide>
      <SwiperSlide className='max-w-[15rem]'>
        <MovieItem />
      </SwiperSlide>
    </Swiper>
  )
}
// <div className='item bg-red-200 w-40 h-40'>Item</div>
export default MovieSlider
