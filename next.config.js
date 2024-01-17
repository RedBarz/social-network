/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
    experimental: {
      serverActions: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "img.clerk.com",
        },
        {
          protocol: "https",
          hostname: "images.clerk.dev",
        },
        {
          protocol: "https",
          hostname: "uploadthing.com",
        },
        {
          protocol: "https",
          hostname: "placehold.co",
        },
        {
          protocol: "https",
          hostname: "utfs.io", 
        },
      ],
      domains: ['utfs.io'], 
    },
  };
  
  module.exports = nextConfig;
  
  
  module.exports = nextConfig;