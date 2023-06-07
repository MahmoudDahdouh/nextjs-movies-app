import Link from 'next/link'
import NavItem from './NavItem'
import { FaBars, FaHamburger, FaSearch } from 'react-icons/fa'
import Image from 'next/image'
import Logo from '../../../public/Logo'

const Navbar = () => {
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
          <NavItem href='/' title='Home' active />
          <NavItem href='/movies' title='Movies' />
          <NavItem href='/tv-shows' title='TV Shows' />
          <NavItem href='/search' title='Search' icon={<FaSearch />} />
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
