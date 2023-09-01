/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  
   // Add basePath
    basePath: '/github-pages',
    images: {
      loader: 'imgix', // Puedes usar otros loaders si lo prefieres
      path: 'https://YsisC.github.io/calculadora-redux/', // Reemplaza con la URL de tu CDN
    },
    outDir: './build',
    experimental: {
      images: true,
    },
  
  }
  
  module.exports = nextConfig
