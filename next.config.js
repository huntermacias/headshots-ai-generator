/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['photoai.com'],
  },

  async generateMetadata() {
    return {
      metadataBase: 'https://headshothub.vercel.app',
    };
  },
  
}

module.exports = nextConfig
