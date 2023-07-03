/** @type {import('next').NextConfig} */
const nextConfig = {
  // add tmdb image url to next image loader domains

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/w500/**',
      },
    ],
  },
}

module.exports = nextConfig
