'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import SliderItem from './HomeSliderItem'

interface SliderProps {
  movies: Movie[]
}

const HomeTopSlider = ({ movies = [] }: SliderProps) => {
  return (
    <>
      <Swiper slidesPerView={1}>
        {movies.map((movie: any, index) => (
          <SwiperSlide key={index}>
            <SliderItem
              title={movie.title}
              vote_average={movie.vote_average}
              release_date={movie.release_date}
              vote_count={movie.vote_count}
              overview={movie.overview}
              backdrop_path={movie.backdrop_path}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default HomeTopSlider
