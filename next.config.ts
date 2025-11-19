import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <--- Cria a pasta 'out' para o Render
  images: {
    unoptimized: true, // <--- Essencial para funcionar sem servidor
  },
};

export default nextConfig;