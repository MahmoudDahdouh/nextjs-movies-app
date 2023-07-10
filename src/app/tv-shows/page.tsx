import axios from '../../api/axios'

import LinkButton from '../../components/buttons/LinkButton'
import TvShowTopSlider from '../../components/sliders/TvShowTopSlider'
import TvShowsSlider from '../../components/sliders/TvShows/TvShowsSlider'

export default async function page() {
  const data: any = await getTvShowPageData()

  return (
    <>
      <TvShowTopSlider movies={data.discoverTvShow.results} />
      <section className='popular-tv-shows  mt-12'>
        <div className='container'>
          <div className='flex justify-between items-center font-bold'>
            <h2 className='text-2xl'>Popular TV Shows</h2>
            <LinkButton href='/tv-shows/category/popular'>View all</LinkButton>
          </div>
          <div className='tv-shows-slider mt-4 flex'>
            <TvShowsSlider tvShows={data.popularTvShow.results} />
          </div>
        </div>
      </section>
      {/* Top Rated TV Shows */}
      <section className='top-rated-tv-shows  mt-12'>
        <div className='container'>
          <div className='flex justify-between items-center font-bold'>
            <h2 className='text-2xl'>Top Rated TV Shows</h2>
            <LinkButton href='/tv-shows/category/top_rated'>
              View all
            </LinkButton>
          </div>
          <div className='tv-shows-slider mt-4 flex'>
            <TvShowsSlider tvShows={data.topRatedTvShow.results} />
          </div>
        </div>
      </section>
    </>
  )
}

const getTvShowPageData = async () => {
  try {
    // const data = res.data
    let data = {
      discoverTvShow: {},
      popularTvShow: {},
      topRatedTvShow: {},
    }

    // Discover TV Shows
    await Promise.all([
      await axios
        .get('/discover/tv?sort_by=popularity.desc')
        .then((res) => {
          data.discoverTvShow = res.data
        })
        .catch((error) => {
          console.log('error', error)
        }),

      // Popular TV Shows
      await axios
        .get('/tv/popular')
        .then((res) => {
          data.popularTvShow = res.data
        })
        .catch((error) => {
          console.log('error', error)
        }),
      // top rated TV Shows
      await axios
        .get('/tv/top_rated')
        .then((res) => {
          data.topRatedTvShow = res.data
        })
        .catch((error) => {
          console.log('error', error)
        }),
    ])

    return data
  } catch (error) {
    console.error('Error making requests:', error)
    return {}
  }
}
