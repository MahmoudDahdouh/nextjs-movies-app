import axios from '../../../../api/axios'
import { notFound } from 'next/navigation'
import MovieItem from '../../../../components/sliders/Movies/MovieItem'

export default async function Page({ params }: { params: { slug: string } }) {
  const { title, data }: any = await getData({ params })

  return (
    <>
      <div className='container'>
        <h1 className='text-4xl capitalize mt-6'>
          {title.replace('_', ' ')} movies
        </h1>
        <div className='results mt-4 grid grid-cols-12 gap-4'>
          {data.results.map((movie: any) => (
            <div
              key={movie.id}
              className='col-span-4 md:col-span-3 lg:col-span-2 '
            >
              <MovieItem {...movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getData({ params }: { params: { slug: string } }) {
  try {
    const title = params.slug

    const res = await axios.get('/movie/' + params.slug, {})
    return { title, data: res.data }
  } catch (error) {
    // redirect to 404 page
    console.log('error', error)
    notFound()
  }
}
