import LinkButton from '../../components/buttons/LinkButton'

const page = () => {
  return (
    <>
      {/* <HomeTopSlider movies={sliderData} /> */}
      {/* Popular TV Shows */}
      <section className='popular-tv-shows  mt-12'>
        <div className='container'>
          <div className='flex justify-between items-center font-bold'>
            <h2 className='text-2xl'>Popular TV Shows</h2>
            <LinkButton href='/tv-shows'>View all</LinkButton>
          </div>
          <div className='movies-slider mt-4 flex'>
            {/* <TvShowsSlider /> */}
          </div>
        </div>
      </section>
      {/* Top Rated TV Shows */}
      <section className='top-rated-tv-shows  mt-12'>
        <div className='container'>
          <div className='flex justify-between items-center font-bold'>
            <h2 className='text-2xl'>Top Rated TV Shows</h2>
            <LinkButton href='/tv-shows'>View all</LinkButton>
          </div>
          <div className='movies-slider mt-4 flex'>
            {/* <TvShowsSlider /> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default page
