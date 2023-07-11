import Image from 'next/image'
import axios from '../../../api/axios'
import { notFound } from 'next/navigation'
import React from 'react'
import {
  ConvertNumberToHoursAndMinutes,
  UsdFormatCurrency,
} from '../../../utils/UtilsFunctions'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import CastSlider from '../../../components/sliders/Cast/CastSlider'
import CrewSlider from '../../../components/sliders/Crew/CrewSlider'

export default async function page({ params }: { params: { id: string } }) {
  const data: any = await getTvShowData({ params })
  const credits: any = await getTvShowCredits({ params })

  const rateFromFive = Math.round(data.vote_average) / 2
  let restStars =
    5 - Math.floor(rateFromFive) - (rateFromFive % 1 !== 0 ? 1 : 0)
  return (
    <>
      <Image
        src={'https://image.tmdb.org/t/p/original' + data.backdrop_path}
        alt='Picture of the film cover'
        height={1000}
        width={1000}
        style={{
          width: '100%',
          height: 'auto',
        }}
        className='object-cover md:hidden'
      />
      <div className='container max-w-screen-lg'>
        <div className='grid grid-cols-12 gap-4 mt-6'>
          <Image
            src={'https://image.tmdb.org/t/p/w500' + data.poster_path}
            alt='Picture of the film cover'
            height={1000}
            width={1000}
            style={{
              width: '100%',
              height: 'auto',
            }}
            className='object-cover col-span-4 hidden md:block rounded-lg'
          />
          <div className='col-span-12 md:col-span-8'>
            <h1 className='text-4xl mt-4'>{data.name}</h1>
            <p className='text-base mt-2'>{data.overview}</p>
            {/* rating with stars */}
            <div className='flex items-center gap-2 mt-2'>
              {[...Array(Math.floor(rateFromFive))].map((item, index) => {
                return (
                  <FaStar className='text-emerald-500 h-6 w-6' key={index} />
                )
              })}
              {rateFromFive % 1 !== 0 && (
                <FaStarHalfAlt className='text-emerald-500 h-6 w-6' />
              )}
              {[...Array(Math.floor(restStars))].map((item, index) => {
                return (
                  <FaRegStar className='text-emerald-500 h-6 w-6' key={index} />
                )
              })}
              <p className='text-gray-400'>{data.vote_count} Reviews</p>
            </div>
            {/* Grid details */}
            <div className='grid grid-cols-12 gap-4 mt-6'>
              <div className='col-span-6'>
                <div className='flex items-center gap-2'>
                  <h2 className='text-base font-bold'>First air date</h2>
                  <p className='text-base'>{data.first_air_date}</p>
                </div>
                <div className='flex items-center gap-2 mt-2'>
                  <h2 className='text-base font-bold'>Language</h2>
                  <p className='text-base uppercase'>
                    {data.original_language}
                  </p>
                </div>
              </div>
              <div className='col-span-6'>
                <div className='flex items-center gap-2'>
                  <h2 className='text-base font-bold'>Last air date</h2>
                  <p className='text-base'>{data.last_air_date}</p>
                </div>
                <div className='flex items-center gap-2 mt-2'>
                  <h2 className='text-base font-bold'>Number of seasons</h2>
                  <p className='text-base'>{data.number_of_seasons}</p>
                </div>
              </div>
            </div>
            <div className='flex items-start gap-2 mt-4'>
              <div className='flex items-center gap-2 flex-wrap'>
                <h2 className='text-base font-bold'>Production</h2>
                {data.production_companies.map(
                  (company: { id: number; name: string }) => (
                    <p
                      className='text-base bg-gray-200 rounded-lg px-2 py-1'
                      key={company.id}
                    >
                      {company.name}
                    </p>
                  )
                )}
              </div>
            </div>

            {/* Genres */}
            <div className='flex items-center gap-2 mt-4'>
              <h2 className='text-base font-bold'>Genres</h2>
              <div className='flex items-center gap-2'>
                {data.genres.map((genre: { id: number; name: string }) => (
                  <p
                    className='text-base bg-gray-200 rounded-lg px-2 py-1'
                    key={genre.id}
                  >
                    {genre.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cast */}
      <div className='container mt-12'>
        <h2 className='text-4xl font-bold mb-4'>Cast</h2>
        <CastSlider cast={credits.cast} />
      </div>
      {/* Crew */}
      <div className='container mt-12'>
        <h2 className='text-4xl font-bold mb-4'>Crew</h2>
        <CrewSlider crew={credits.crew} />
      </div>
    </>
  )
}

async function getTvShowData({ params }: { params: { id: string } }) {
  try {
    const res = await axios.get('/tv/' + params.id, {})
    return res.data
  } catch (error) {
    // redirect to 404 page
    console.log('error', error)
    notFound()
  }
}

async function getTvShowCredits({ params }: { params: { id: string } }) {
  try {
    const res = await axios.get(`/tv/${params.id}/credits`, {})
    return res.data
  } catch (error) {
    // redirect to 404 page
    console.log('error', error)
    // notFound()
  }
}
