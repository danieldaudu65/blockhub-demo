import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Tells Next.js to generate static files
  reactStrictMode: true, // Enables React strict mode
  swcMinify: true, // Uses SWC for faster minification
  images: {
    unoptimized: true, // Disable image optimization (Netlify doesn't support Next.js built-in optimization)
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // Allows importing SVGs as React components
    });

    return config;
  },
};

export default nextConfig;
