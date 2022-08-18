/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    swcPlugins: [
      ['css-variable/swc', { displayName: true, basePath: __dirname }],
    ],
  },
}

module.exports = nextConfig
