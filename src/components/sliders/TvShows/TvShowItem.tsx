import Image from 'next/image'
import Link from 'next/link'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'

const TvShowItem = ({
  id,
  backdrop_path,
  name,
  vote_average = 0,
  vote_count,
}: TvShow) => {
  const rateFromFive = Math.round(vote_average) / 2
  let restStars =
    5 - Math.floor(rateFromFive) - (rateFromFive % 1 !== 0 ? 1 : 0)
  return (
    <Link href={`/tv-shows/${id}`}>
      <div className='slider-item '>
        <div className='img w-full overflow-hidden rounded-lg'>
          <Image
            src={
              backdrop_path
                ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
                : '/temp-cover.webp'
            }
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
        <h2 className='text-base mt-2'>{name}</h2>

        {/* Rating */}
        <div className='text-base text-gray-500 items-center'>
          <div className='rating flex items-center gap-2'>
            {[...Array(Math.floor(rateFromFive))].map((item, index) => {
              return <FaStar className='text-emerald-500 h-4 w-4' key={index} />
            })}
            {rateFromFive % 1 !== 0 && (
              <FaStarHalfAlt className='text-emerald-500 h-4 w-4' />
            )}
            {[...Array(Math.floor(restStars))].map((item, index) => {
              return (
                <FaRegStar className='text-emerald-500 h-4 w-4' key={index} />
              )
            })}
            <p className='rating'>{(vote_average / 2).toFixed(1)}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TvShowItem
