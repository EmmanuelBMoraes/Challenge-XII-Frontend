/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "challenge-xii-bucket-compass-uol-emma.s3.amazonaws.com",
      },
    ],
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
