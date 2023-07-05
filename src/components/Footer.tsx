import Link from 'next/link'
import Logo from '../../public/Logo'

import { SiCss3, SiHtml5, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Image from 'next/image'
import {
  FaGithubSquare,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
  FaTwitterSquare,
} from 'react-icons/fa'
import TMDBLogo from '../../public/TMDBLogo'

const Footer = () => {
  return (
    <footer className='bg-emerald-950 text-white '>
      <div className='container py-12'>
        <Link href='/' className=' flex items-center gap-2 text-4xl max-w-fit'>
          <Logo />
        </Link>
        {/* Technologies */}
        <div className='technologies flex items-center gap-2 mt-2'>
          <p className='text-white text-base'>Made with:</p>
          <div className='h-10 w-10 p-1'>
            <SiHtml5 className='h-auto w-full text-[#e34f26]' />
          </div>
          <div className='h-10 w-10 p-1'>
            <SiCss3 className='h-auto w-full text-[#1572b6]' />
          </div>
          <div className='h-10 w-10 p-1'>
            <SiTypescript className='h-auto w-full text-[#007acc]' />
          </div>
          <div className='h-10 w-10'>
            <SiTailwindcss className='h-auto w-full text-[#38bdf8]' />
          </div>
          <div className='h-10 w-10'>
            <svg
              aria-label='Next.js logomark'
              className='next-mark_root__wLeec h-auto w-full'
              height='80'
              role='img'
              viewBox='0 0 180 180'
              width='80'
            >
              <mask
                height='180'
                id=':R0:mask0_408_134'
                maskUnits='userSpaceOnUse'
                style={{ maskType: 'alpha' }}
                width='180'
                x='0'
                y='0'
              >
                <circle cx='90' cy='90' fill='black' r='90'></circle>
              </mask>
              <g mask='url(#:R0:mask0_408_134)'>
                <circle
                  cx='90'
                  cy='90'
                  data-circle='true'
                  fill='black'
                  r='90'
                ></circle>
                <path
                  d='M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z'
                  fill='url(#:R0:paint0_linear_408_134)'
                ></path>
                <rect
                  fill='url(#:R0:paint1_linear_408_134)'
                  height='72'
                  width='12'
                  x='115'
                  y='54'
                ></rect>
              </g>
              <defs>
                <linearGradient
                  gradientUnits='userSpaceOnUse'
                  id=':R0:paint0_linear_408_134'
                  x1='109'
                  x2='144.5'
                  y1='116.5'
                  y2='160.5'
                >
                  <stop stopColor='white'></stop>
                  <stop offset='1' stopColor='white' stopOpacity='0'></stop>
                </linearGradient>
                <linearGradient
                  gradientUnits='userSpaceOnUse'
                  id=':R0:paint1_linear_408_134'
                  x1='121'
                  x2='120.799'
                  y1='54'
                  y2='106.875'
                >
                  <stop stopColor='white'></stop>
                  <stop offset='1' stopColor='white' stopOpacity='0'></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <p className='text-white text-base'>Data provided by:</p>
          <a href='https://www.themoviedb.org/' target='_blank'>
            <div className='h-20 w-20 flex items-center'>
              <TMDBLogo />
            </div>
          </a>
        </div>
      </div>
      {/* bottom footer */}
      <div className='bottom-footer bg-black/40 p-4'>
        <p className='text-white text-xl text-center'>
          Made with{' '}
          <span role='img' aria-label='heart'>
            ❤️
          </span>{' '}
          by{' '}
          <a
            href='https://github.com/MahmoudDahdouh'
            target='_blank'
            className='text-emerald-500 hover:text-emerald-400 hover:no-underline underline transition-all'
          >
            Mahmoud Dahdouh
          </a>
        </p>
        {/* Social links */}
        <div className='flex items-center justify-center gap-4 mt-2 flex-wrap'>
          <a
            href='https://www.linkedin.com/in/mahmoud-dahdouh-56620618a/'
            className='text-white text-2xl hover:text-emerald-500 transition-all'
            target='_blank'
          >
            <FaLinkedin />
          </a>
          <a
            href='https://twitter.com/MahmoudDahdouh9'
            className='text-white text-2xl hover:text-emerald-500 transition-all'
            target='_blank'
          >
            <FaTwitterSquare />
          </a>
          <a
            href='https://www.instagram.com/mahmouddahdouh9/'
            className='text-white text-2xl hover:text-emerald-500 transition-all'
            target='_blank'
          >
            <FaInstagramSquare />
          </a>
          <a
            href='https://github.com/MahmoudDahdouh/'
            className='text-white text-2xl hover:text-emerald-500 transition-all'
            target='_blank'
          >
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
