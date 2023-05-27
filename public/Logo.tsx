import Image from 'next/image'

const Logo = () => {
  return (
    <>
      <Image
        src='/logo.svg'
        alt='logo'
        width={48}
        height={48}
        className='bg-white rounded-lg p-1'
      />
      Movies
    </>
  )
}

export default Logo
