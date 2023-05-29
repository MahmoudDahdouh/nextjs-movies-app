import Image from 'next/image'

interface SliderItemProps {
  title?: string
  rating?: number
  year?: number
  duration?: number
  description?: string
  cover: string
}

const SliderItem = ({
  title,
  rating,
  duration,
  year,
  description,
  cover = '',
}: SliderItemProps) => {
  return (
    <div className='grid grid-cols-2 relative'>
      <div className='md:col-span-1 col-span-2 md:order-1 order-2 bg-emerald-950 '>
        <div className='md:absolute top-0 left-0 right-0 bottom-0 flex items-center'>
          <div className='container py-4 text-white grid grid-cols-2'>
            <div className='col-span-2 md:col-span-1'>
              <h1 className='text-3xl '>{title}</h1>
              <div className='flex gap-4 text-base text-gray-500'>
                <p className='rating'>{rating}</p>
                <p>{year}</p>
                <p>{duration}</p>
              </div>
              <p className='text-gray-500'>{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='md:col-span-1 col-span-2 order-1 relative '>
        <div className='gradient-cover w-full h-full absolute'></div>
        <Image
          src={cover}
          alt='Picture of the film cover'
          height={1000}
          width={1000}
          style={{
            height: 'auto',
            aspectRatio: '16/9',
          }}
          className='object-cover'
        />
      </div>
    </div>
  )
}

export default SliderItem
