'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import CastItem from './CastItem'

interface CastSliderProps {
  cast: Cast[]
}

const CastSlider = ({ cast = [] }: CastSliderProps) => {
  return (
    <>
      <Swiper
        className='slider-width-auto slides-start'
        slidesPerView={'auto'}
        spaceBetween={16}
      >
        {cast.map((item: Cast) => (
          <SwiperSlide key={item.id} className='max-w-[15rem]'>
            <CastItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default CastSlider
