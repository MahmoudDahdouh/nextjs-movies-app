import axios from '../../../../api/axios'
import { notFound } from 'next/navigation'
import TvShowItem from '../../../../components/sliders/TvShows/TvShowItem'

export default async function Page({ params }: { params: { slug: string } }) {
  const { title, data }: any = await getData({ params })

  return (
    <>
      <div className='container'>
        <h1 className='text-4xl capitalize mt-6'>
          {title.replace('_', ' ')} <span className='uppercase'>tv</span> shows
        </h1>
        <div className='results mt-4 grid grid-cols-12 gap-4'>
          {data.results.map((TvShow: any) => (
            <div
              key={TvShow.id}
              className='col-span-6 md:col-span-4 lg:col-span-3 '
            >
              <TvShowItem {...TvShow} />
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

    const res = await axios.get('/tv/' + params.slug, {})
    return { title, data: res.data }
  } catch (error) {
    // redirect to 404 page
    console.log('error', error)
    notFound()
  }
}
