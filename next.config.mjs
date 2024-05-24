/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['images.pexels.com',
      'another-domain.com', 
      'yet-another-domain.com',
      'assets.aceternity.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: ''
      }
    ]},
  };
  
  export default nextConfig;


