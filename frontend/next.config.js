/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['0.0.0.0'],
  },
  publicRuntimeConfig: {
    strapiURL: 'http://0.0.0.0:1337'
  }
}

module.exports = nextConfig
