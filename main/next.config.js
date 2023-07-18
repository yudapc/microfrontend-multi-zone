/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*'
      },
      {
        source: '/articles',
        destination: 'http://localhost:3001/articles',
      },
      {
        source: '/articles/:path*',
        destination: 'http://localhost:3001/articles/:path*',
      },
    ];
  },
}

module.exports = nextConfig
