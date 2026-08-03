import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Project mockups are already exported as optimized local PNG files.
  // Serving them directly also keeps the local preview independent from
  // Cloudflare image bindings that only exist after deployment.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
