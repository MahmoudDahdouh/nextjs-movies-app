import {
  HiFilm,
  HiHome,
  HiOutlineFilm,
  HiOutlineHome,
  HiOutlineSearch,
  HiSearch,
} from 'react-icons/hi'
import { MdOutlineTv, MdTv } from 'react-icons/md'
import BottomNavItem from './BottomNavItem'

const BottomNav = () => {
  return (
    <nav className='flex md:hidden min-h-fit bg-emerald-950 bottom-0 sticky z-50'>
      <div className='container flex gap-4 justify-between items-center h-full py-2'>
        <BottomNavItem
          href='/'
          title='Home'
          icon={<HiOutlineHome />}
          activeIcon={<HiHome />}
          active
        />
        <BottomNavItem
          href='/movies'
          title='Movies'
          icon={<HiOutlineFilm />}
          activeIcon={<HiFilm />}
        />
        <BottomNavItem
          href='/tv-shows'
          title='TV Shows'
          icon={<MdOutlineTv />}
          activeIcon={<MdTv />}
        />
        <BottomNavItem
          href='/search'
          title='Search'
          activeIcon={<HiSearch />}
          icon={<HiOutlineSearch />}
        />
      </div>
    </nav>
  )
}

export default BottomNav
