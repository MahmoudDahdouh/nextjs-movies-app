import axios from '../../api/axios'

import LinkButton from '../../components/buttons/LinkButton'
import MovieTopSlider from '../../components/sliders/MovieTopSlider'
import MovieSlider from '../../components/sliders/Movies/MovieSlider'

export default async function page() {
  const data: any = await getMoviesPageData()

  return (
    <>
      <MovieTopSlider movies={data.discoverMovies.results} />

      {/* Popular movies */}
      <section className='popular-movies  mt-12'>
        <div className='container'>
          <div className='flex justify-between items-center font-bold'>
            <h2 className='text-2xl'>Popular Movies</h2>
            <LinkButton href='/movies'>View all</LinkButton>
          </div>
          <div className='movies-slider mt-4 flex'>
            <MovieSlider movies={data.popularMovies.results} />
          </div>
        </div>
      </section>
      {/* Top Rated Movies */}
      <section className='top-rated-movies  mt-12'>
        <div className='container'>
          <div className='flex justify-between items-center font-bold'>
            <h2 className='text-2xl'>Top Rated Movies</h2>
            <LinkButton href='/movies'>View all</LinkButton>
          </div>
          <div className='movies-slider mt-4 flex'>
            <MovieSlider movies={data.topRatedMovies.results} />
          </div>
        </div>
      </section>
      {/* Upcoming Movies */}
      <section className='upcoming-movies  mt-12'>
        <div className='container'>
          <div className='flex justify-between items-center font-bold'>
            <h2 className='text-2xl'>Upcoming Movies</h2>
            <LinkButton href='/movies'>View all</LinkButton>
          </div>
          <div className='movies-slider mt-4 flex'>
            <MovieSlider movies={data.upcomingMovies.results} />
          </div>
        </div>
      </section>
    </>
  )
}

const getMoviesPageData = async () => {
  try {
    // const data = res.data
    let data = {
      discoverMovies: {},
      popularMovies: {},
      topRatedMovies: {},
      upcomingMovies: {},
    }

    // Discover movies
    const asd = await Promise.all([
      await axios
        .get('/discover/movie?sort_by=popularity.desc')
        .then((res) => {
          data.discoverMovies = res.data
        })
        .catch((error) => {
          console.log('error', error)
        }),

      // Popular movies
      await axios
        .get('/movie/popular')
        .then((res) => {
          data.popularMovies = res.data
        })
        .catch((error) => {
          console.log('error', error)
        }),
      // top rated movies
      await axios
        .get('/movie/top_rated')
        .then((res) => {
          data.topRatedMovies = res.data
        })
        .catch((error) => {
          console.log('error', error)
        }),
      // upcoming movies
      await axios
        .get('/movie/upcoming')
        .then((res) => {
          data.upcomingMovies = res.data
        })
        .catch((error) => {
          console.log('error', error)
        }),
    ])

    return data
  } catch (error) {
    console.error('Error making parallel requests:', error)
    return {}
  }
}
