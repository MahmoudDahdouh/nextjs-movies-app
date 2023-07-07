import LinkButton from '../../components/buttons/LinkButton'

const page = () => {
  return (
    <>
      {/* <HomeTopSlider ={sliderData} /> */}

      {/* test */}
      {/* Popular movies */}
      <section className='popular-movies  mt-12'>
        <div className='container'>
          <div className='flex justify-between items-center font-bold'>
            <h2 className='text-2xl'>Popular Movies</h2>
            <LinkButton href='/movies'>View all</LinkButton>
          </div>
          <div className='movies-slider mt-4 flex'>{/* <MovieSlider /> */}</div>
        </div>
      </section>
      {/* Top Rated Movies */}
      <section className='top-rated-movies  mt-12'>
        <div className='container'>
          <div className='flex justify-between items-center font-bold'>
            <h2 className='text-2xl'>Top Rated Movies</h2>
            <LinkButton href='/movies'>View all</LinkButton>
          </div>
          <div className='movies-slider mt-4 flex'>{/* <MovieSlider /> */}</div>
        </div>
      </section>
      {/* Upcoming Movies */}
      <section className='upcoming-movies  mt-12'>
        <div className='container'>
          <div className='flex justify-between items-center font-bold'>
            <h2 className='text-2xl'>Upcoming Movies</h2>
            <LinkButton href='/movies'>View all</LinkButton>
          </div>
          <div className='movies-slider mt-4 flex'>{/* <MovieSlider /> */}</div>
        </div>
      </section>
    </>
  )
}

export default page
