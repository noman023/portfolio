/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**", // Allows all image paths from i.ibb.co
      },
    ],
  },
};

module.exports = nextConfig;
