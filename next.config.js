/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  '@stripe/firestore-stripe-payments',
])


const nextConfig = withTM({
  reactStrictMode: true,
  images: {
    domains: ['rb.gy', 'image.tmdb.org', 'assets.nflxext.com'],
  },
})

module.exports = nextConfig
