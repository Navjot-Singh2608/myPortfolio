// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/portfolio',
        destination: '/app/portfolio/page.client' // Ensure this path correctly matches your file structure
      }
    ]
  }
}

module.exports = nextConfig
