/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [process.env.imagesDomain],
  },
  publicRuntimeConfig: {
    strapiURL: process.env.strapiURL
  }
}

module.exports = nextConfig
