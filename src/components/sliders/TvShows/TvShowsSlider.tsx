'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import TvShowItem from './TvShowItem'
interface SliderProps {
  tvShows: TvShow[]
}
const TvShowsSlider = ({ tvShows }: SliderProps) => {
  return (
    <Swiper
      className='slider-width-auto slides-start'
      slidesPerView={'auto'}
      spaceBetween={16}
    >
      {tvShows.map((tvShow: TvShow) => (
        <SwiperSlide key={tvShow.id} className='max-w-[25rem]'>
          <TvShowItem {...tvShow} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
// <div className='item bg-red-200 w-40 h-40'>Item</div>
export default TvShowsSlider
