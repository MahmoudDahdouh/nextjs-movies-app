'use client'

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
import { usePathname } from 'next/navigation'

const BottomNav = () => {
  const currentPath = usePathname()

  return (
    <nav className='flex md:hidden min-h-fit bg-emerald-950 bottom-0 sticky z-50 drop-shadow-[0_-4px_8px_rgba(0,0,0,0.4)]'>
      <div className='container flex gap-4 justify-between items-center h-full py-2'>
        <BottomNavItem
          href='/'
          title='Home'
          icon={<HiOutlineHome />}
          activeIcon={<HiHome />}
          active={currentPath === '/'}
        />
        <BottomNavItem
          href='/movies'
          title='Movies'
          icon={<HiOutlineFilm />}
          active={currentPath.includes('movies')}
          activeIcon={<HiFilm />}
        />
        <BottomNavItem
          href='/tv-shows'
          title='TV Shows'
          icon={<MdOutlineTv />}
          active={currentPath.includes('tv-shows')}
          activeIcon={<MdTv />}
        />
        <BottomNavItem
          href='/search'
          title='Search'
          activeIcon={<HiSearch />}
          active={currentPath.includes('search')}
          icon={<HiOutlineSearch />}
        />
      </div>
    </nav>
  )
}

export default BottomNav
