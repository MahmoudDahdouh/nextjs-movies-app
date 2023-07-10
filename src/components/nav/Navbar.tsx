'use client'
import Link from 'next/link'
import NavItem from './NavItem'
import { FaSearch } from 'react-icons/fa'
import Logo from '../../../public/Logo'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const currentPath = usePathname()

  return (
    <nav className='h-20 bg-emerald-950 text-white flex items-center'>
      <div className='container flex justify-between items-center  h-full'>
        <div className='logo'>
          <Link
            href={'/'}
            className='text-4xl font-black uppercase flex justify-between items-center gap-4'
          >
            <Logo />
          </Link>
        </div>
        <ul className='nav-links hidden text-base justify-between items-center gap-4 md:flex'>
          <NavItem href='/' title='Home' active={currentPath === '/'} />
          <NavItem
            href='/movie'
            title='Movies'
            active={currentPath.includes('movie')}
          />
          <NavItem
            href='/tv-shows'
            title='TV Shows'
            active={currentPath.includes('tv-shows')}
          />
          <NavItem
            href='/search'
            title='Search'
            icon={<FaSearch />}
            active={currentPath.includes('search')}
          />
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
