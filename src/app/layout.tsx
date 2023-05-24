import './globals.css'

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
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
