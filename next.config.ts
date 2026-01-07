import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true, // For static exports or if you don't want Next.js image optimization
  },
  // Allow importing from attached_assets
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@assets': require('path').resolve(__dirname, 'attached_assets'),
    }
    return config
  },
}

export default nextConfig

