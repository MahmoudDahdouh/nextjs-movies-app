import LinkButton from '@/components/buttons/LinkButton'
import HomeTopSlider from '@/components/sliders/HomeTopSlider/HomeTopSlider'
import MovieSlider from '@/components/sliders/Movies/MovieSlider'

const page = () => {
  const sliderData = [
    {
      id: 1,
      title: 'John Wick: Chapter 4',
      overview:
        'With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.',
      vote_average: 8.1,
      vote_count: 92123,
      release_date: '2021-05-15',
      duration: 120,
    },
    {
      id: 1,
      title: 'John Wick: Chapter 4',
      overview:
        'With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.',
      vote_average: 6.6,
      duration: 120,
      vote_count: 1234,

      release_date: '2021-05-15',
    },
  ]
  return (
    <>
      <HomeTopSlider movies={sliderData} />

      {/* Popular movies */}
      <section className='popular-movies  mt-12'>
        <div className='container'>
          <div className='flex justify-between items-center font-bold'>
            <h2 className='text-2xl'>Popular Movies</h2>
            <LinkButton href='/movies'>View all</LinkButton>
          </div>
          <div className='movies-slider mt-4 flex'>
            <MovieSlider />
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
            <MovieSlider />
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
            <MovieSlider />
          </div>
        </div>
      </section>
    </>
  )
}

export default page
