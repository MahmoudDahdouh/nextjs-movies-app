'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import MovieItem from './MovieItem'
interface SliderProps {
  movies: Movie[]
}

const MovieSlider = ({ movies = [] }: SliderProps) => {
  return (
    <Swiper
      className='slider-width-auto slides-start'
      slidesPerView={'auto'}
      spaceBetween={16}
    >
      {movies.map((movie: Movie) => (
        <SwiperSlide key={movie.id} className='max-w-[15rem]'>
          <MovieItem {...movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
// <div className='item bg-red-200 w-40 h-40'>Item</div>
export default MovieSlider
