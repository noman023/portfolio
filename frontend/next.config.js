/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co"], // allow image from this host
  },
  output: "export",
};

module.exports = nextConfig;
