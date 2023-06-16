import Link from 'next/link'
import { HiHome } from 'react-icons/hi'

interface BottomNavItemProps {
  href: string
  title: string
  activeIcon?: React.ReactNode
  icon?: React.ReactNode
  active?: boolean
}

const BottomNavItem = ({
  href,
  title,
  activeIcon,
  icon,
  active,
}: BottomNavItemProps) => {
  return (
    <Link
      href={href}
      className={`flex flex-col flex-1 items-center justify-between gap-1 text-white text-center hover:bg-emerald-900/40 transition-all rounded-lg p-1
      ${active ? 'bg-emerald-900 font-black' : ''}
      `}
    >
      <div className='text-2xl'>{active ? activeIcon : icon}</div>
      {title}
    </Link>
  )
}

export default BottomNavItem
