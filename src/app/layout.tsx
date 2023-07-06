import Footer from '../components/Footer'
import BottomNav from '../components/nav/BottomNav'
import Navbar from '../components/nav/Navbar'
import './globals.css'
import 'swiper/css'

export const metadata = {
  title: 'Movie App',
  description:
    'A movie app built with Next.js and Tailwind CSS. 🎥\nBuild with Love by: Mahmoud Dahdouh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/logo.svg' />
      </head>
      <body className='min-h-screen flex flex-col'>
        <Navbar />
        <main className='flex-1 pb-12'>{children}</main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  )
}
