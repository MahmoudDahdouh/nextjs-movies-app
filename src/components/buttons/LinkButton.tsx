import Link from 'next/link'

interface LinkButtonProps {
  href: string
  className?: string
  children: React.ReactNode
}

const LinkButton = ({ href, className, children }: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className={`text-sm text-gray-500 min-h-[2rem] px-4 py-2 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all ${className}`}
    >
      {children}
    </Link>
  )
}

export default LinkButton
