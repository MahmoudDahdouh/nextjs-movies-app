'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import SliderItem from './SliderItem'

interface SliderProps {
  movies: Movie[]
}

const TopSlider = ({ movies = [] }: SliderProps) => {
  return (
    <>
      <Swiper slidesPerView={1}>
        {movies.map((movie: any, index) => (
          <SwiperSlide key={movie.id}>
            <SliderItem {...movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default TopSlider
