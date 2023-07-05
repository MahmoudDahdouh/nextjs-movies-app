import MovieItem from '@/components/sliders/Movies/MovieItem'
import { FaSearch } from 'react-icons/fa'

const page = () => {
  return (
    <>
      <section className='search container'>
        <form className='mt-6'>
          <label htmlFor='search' className=''>
            <div className='search-input flex items-center gap-2 bg-gray-200 px-3 py-2 rounded-lg'>
              <FaSearch />
              <input
                className='outline-none flex-1 inline-block bg-transparent'
                type='text'
                name='search'
                id='search'
                placeholder='Type something to search...'
              />
            </div>
          </label>
        </form>
        <h1 className='text-2xl text-gray-950 mt-2'>Search result for:</h1>
        <p className='text-base text-gray-400'>1 item</p>
        <div className='search-results grid grid-cols-12 gap-4 mt-4'>
          <div className='col-span-4 md:col-span-3 xl:col-span-2'>
            {/* <MovieItem /> */}
          </div>
          <div className='col-span-4 md:col-span-3 xl:col-span-2'>
            {/* <MovieItem /> */}
          </div>
          <div className='col-span-4 md:col-span-3 xl:col-span-2'>
            {/* <MovieItem /> */}
          </div>
          <div className='col-span-4 md:col-span-3 xl:col-span-2'>
            {/* <MovieItem /> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default page
