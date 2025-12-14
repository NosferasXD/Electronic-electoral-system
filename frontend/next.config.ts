// Arquivo: next.config.js (ou .mjs)

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuração para desativar a otimização de CSS do Next.js
  // que usa o Turbopack/lightningcss, forçando o uso do PostCSS padrão.
  experimental: {
    optimizeCss: false, 
  },
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", 
        pathname: "/**/*.{png,jpg,jpeg,gif,webp,svg}", 
      },
      {
        protocol: "http",
        hostname: "**", 
        pathname: "/**/*.{png,jpg,jpeg,gif,webp,svg}",
      },
    ],
  },
};

export default nextConfig;