import Image from 'next/image'
import { FaRegStar, FaStar, FaStarHalfAlt, FaStarOfDavid } from 'react-icons/fa'

const HomeSliderItem = ({
  title,
  vote_average = 0,
  vote_count,
  release_date,
  overview,
  backdrop_path = '/temp-cover.webp',
}: Movie) => {
  const rateFromFive = Math.round(vote_average) / 2
  let restStars =
    5 - Math.floor(rateFromFive) - (rateFromFive % 1 !== 0 ? 1 : 0)
  return (
    <div className='grid grid-cols-2 relative'>
      <div className='lg:col-span-1 col-span-2 lg:order-1 order-2 bg-emerald-950 '>
        <div className='lg:absolute top-0 left-0 right-0 bottom-0 flex items-center'>
          <div className='container py-4 text-white grid grid-cols-2'>
            <div className='col-span-2 lg:col-span-1'>
              <h1 className='text-3xl '>{title}</h1>
              <p className='text-gray-500'>{overview}</p>
              {/* Rating */}
              <div className='text-base text-gray-500 items-center mt-2'>
                <div className='rating flex items-center gap-2'>
                  <p className='rating'>{(vote_average / 2).toFixed(1)}</p>
                  {[...Array(Math.floor(rateFromFive))].map((item, index) => {
                    return <FaStar className='text-emerald-500' key={index} />
                  })}
                  {rateFromFive % 1 !== 0 && (
                    <FaStarHalfAlt className='text-emerald-500' />
                  )}
                  {[...Array(Math.floor(restStars))].map((item, index) => {
                    return (
                      <FaRegStar className='text-emerald-500' key={index} />
                    )
                  })}
                </div>
                <p>{vote_count} Reviews</p>
              </div>

              <p className='px-2 py-1 rounded-lg bg-gray-500 inline-block text-white mt-2'>
                {release_date?.slice(0, 4)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:col-span-1 col-span-2 order-1 relative '>
        <div className='gradient-cover w-full h-full absolute'></div>
        <Image
          src={backdrop_path}
          alt='Picture of the film cover'
          height={1000}
          width={1000}
          style={{
            height: 'auto',
            aspectRatio: '16/9',
          }}
          className='object-cover'
        />
      </div>
    </div>
  )
}

export default HomeSliderItem
