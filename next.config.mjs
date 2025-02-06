/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts'],
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
