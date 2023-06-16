import Link from 'next/link'

interface NavItemProps {
  href: string
  title: string
  icon?: React.ReactNode
  active?: boolean
}

const NavItem = ({ href, title, icon, active }: NavItemProps) => {
  return (
    <li>
      <Link
        href={href}
        className={`flex gap-4 justify-between items-center p-4 py-2 hover:bg-emerald-900/40 rounded-lg transition-all
        ${active ? 'bg-emerald-900 font-black' : ''}
        `}
      >
        {icon && <span className=''>{icon}</span>}
        {title}
      </Link>
    </li>
  )
}

export default NavItem
