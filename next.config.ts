import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/investor-finder",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
