/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['photoai.com'],
  },
  
}

module.exports = nextConfig
