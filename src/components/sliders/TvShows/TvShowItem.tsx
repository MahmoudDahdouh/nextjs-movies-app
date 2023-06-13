import Image from 'next/image'
import Link from 'next/link'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

const TvShowItem = () => {
  return (
    <Link href='/movies/1' className='max-w-xs'>
      <div className='slider-item '>
        <div className='img w-full overflow-hidden rounded-lg'>
          <Image
            src='/temp-cover.webp'
            alt='Picture of the film cover'
            height={1000}
            width={1000}
            style={{
              height: 'auto',
              aspectRatio: '16/9',
            }}
            className='object-cover hover:scale-110 transition-all duration-300 ease-in-out'
          />
        </div>
        <h2 className='text-base mt-2'>John Wick: Chapter 4</h2>

        <div className='rating flex items-center gap-2'>
          <div className='flex items-center gap-1'>
            <FaStar className='text-emerald-500 h-4 w-4' />
            <FaStar className='text-emerald-500 h-4 w-4' />
            <FaStar className='text-emerald-500 h-4 w-4' />
            <FaStarHalfAlt className='text-emerald-500 h-4 w-4' />
            <FaStarHalfAlt className='text-emerald-500 h-4 w-4' />
          </div>
          <p className='text-xs text-gray-500'>5.6</p>
        </div>
      </div>
    </Link>
  )
}

export default TvShowItem
