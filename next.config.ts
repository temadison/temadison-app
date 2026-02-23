import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "temadison.com" }],
        destination: "https://www.temadison.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
