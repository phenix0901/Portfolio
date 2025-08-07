/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  images: {
    domains: ['placeholder.svg'],
    unoptimized: true,
  },
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
}

export default nextConfig
