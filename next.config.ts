import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
    images: {
    domains: ["images.unsplash.com"], // Add all external image hostnames here
  },
};

export default nextConfig;
