import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["www.gstatic.com", "upload.wikimedia.org"], // Allow images from these domains
  },
};

export default nextConfig;
