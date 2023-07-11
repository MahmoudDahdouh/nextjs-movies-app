import Image from 'next/image'

const CrewItem = ({ id, name, job, profile_path }: Crew) => {
  return (
    <>
      <div className='rounded-lg overflow-hidden'>
        <Image
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : '/temp-cover.webp'
          }
          alt={name}
          height={1000}
          width={1000}
          style={{
            width: '100%',
            height: 'auto',
            aspectRatio: '9/16',
          }}
          className='object-cover'
        />
      </div>
      <h3 className='text-xl font-bold mt-2'>{name}</h3>
      <p className='text-base text-gray-500'>{job}</p>
    </>
  )
}

export default CrewItem
