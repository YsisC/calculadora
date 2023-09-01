/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [

  
        {
          protocol: 'https',
          hostname: 'assets.chucknorris.host',
          port: '',
          pathname: 'img/avatar/**',
        },
      ],
    },
  }
  
  module.exports = nextConfig
