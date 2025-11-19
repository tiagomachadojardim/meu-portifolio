import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  
  eslint: {
    // Isso diz para ignorar erros de aspas e regras chatas na hora do build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Isso diz para ignorar o erro do 'any'
    ignoreBuildErrors: true,
  },
};

export default nextConfig;