import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow dev server access from local network IPs
  allowedDevOrigins: ["192.168.1.15"],
  async headers() {
    return [
      {
        source: "/api/getstats/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT,OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Accept, Accept-Version, Content-Length, Content-Type, Authorization" },
        ]
      }
    ]
  }
};

export default nextConfig;
