'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import CrewItem from './CrewItem'

interface CrewSliderProps {
  crew: Crew[]
}

const CrewSlider = ({ crew = [] }: CrewSliderProps) => {
  return (
    <>
      <Swiper
        className='slider-width-auto slides-start'
        slidesPerView={'auto'}
        spaceBetween={16}
      >
        {crew.map((item: Crew) => (
          <SwiperSlide key={item.id} className='max-w-[15rem]'>
            <CrewItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default CrewSlider
