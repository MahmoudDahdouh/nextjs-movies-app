import Link from 'next/link'
import { BiSad } from 'react-icons/bi'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center mt-6'>
      <BiSad className='text-9xl text-gray-400' />
      <h1 className='text-4xl mt-4 text-gray-950'>Page not found !</h1>
      <Link
        href='/'
        className='mt-6 px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all 00 border border-gray-950'
      >
        Go back home
      </Link>
    </div>
  )
}

export default NotFound
