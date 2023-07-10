import axios from '../api/axios'
import LinkButton from '../components/buttons/LinkButton'
import MovieTopSlider from '../components/sliders/MovieTopSlider'
import MovieSlider from '../components/sliders/Movies/MovieSlider'
import TvShowsSlider from '../components/sliders/TvShows/TvShowsSlider'

export default async function Home() {
  const data: any = await getHomePageData()

  return (
    <>
      <MovieTopSlider movies={data.discoverMovies.results} />
      {/* Popular movies */}
      <section className='popular-movies  mt-12'>
        <div className='container'>
          <div className='flex justify-between items-center font-bold'>
            <h2 className='text-2xl'>Popular Movies</h2>
            <LinkButton href='/movie/category/popular'>View all</LinkButton>
          </div>
          <div className='movies-slider mt-4 flex'>
            <MovieSlider movies={data.popularMovies.results} />
          </div>
        </div>
      </section>
      {/* Popular TV Shows */}
      <section className='popular-tv-shows  mt-12'>
        <div className='container'>
          <div className='flex justify-between items-center font-bold'>
            <h2 className='text-2xl'>Popular TV Shows</h2>
            <LinkButton href='/tv-shows/category/popular'>View all</LinkButton>
          </div>
          <div className='movies-slider mt-4 flex'>
            <TvShowsSlider tvShows={data.popularTvShows.results} />
          </div>
        </div>
      </section>
    </>
  )
}

const getHomePageData = async () => {
  try {
    // const data = res.data
    let data = {
      discoverMovies: {},
      popularMovies: {},
      popularTvShows: {},
    }

    // Discover movies
    const asd = await Promise.all([
      await axios
        .get('/discover/movie?sort_by=popularity.desc&include_adult=false')
        .then((res) => {
          data.discoverMovies = res.data
        })
        .catch((error) => {
          console.log('error', error)
        }),

      // Popular movies
      await axios
        .get('/movie/popular?include_adult=false')
        .then((res) => {
          data.popularMovies = res.data
        })
        .catch((error) => {
          console.log('error', error)
        }),
      // popular tv shows
      await axios
        .get('/tv/popular?include_adult=false')
        .then((res) => {
          data.popularTvShows = res.data
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
