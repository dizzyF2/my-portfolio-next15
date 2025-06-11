import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
        remotePatterns:[
          {
              protocol: 'https',
              hostname: "qhvbsdeecrazsuvlsqjk.supabase.co",
          },
        ]
  },
};

export default nextConfig;
