/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        
        hostname: 'res.cloudinary.com',
       
      },
    ],
  },
      env: {
        EMAIL_KEY: 'h9qODiCp9P-lnXJch',
      },
}


module.exports = nextConfig
