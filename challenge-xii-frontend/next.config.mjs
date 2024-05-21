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
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_API_URL_POSTS: process.env.NEXT_PUBLIC_API_URL_POSTS,
  },
};

export default nextConfig;
