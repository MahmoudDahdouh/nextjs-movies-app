'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import SliderItem from './SliderItem'

interface SliderProps {
  movies?: any
}

const Slider = ({ movies = [] }: any) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {movies.map((movie: any) => (
          <SwiperSlide key={movie.id}>
            <SliderItem
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date}
              duration={movie.runtime}
              description={movie.overview}
              cover={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Slider
