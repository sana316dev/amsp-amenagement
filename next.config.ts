import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Les visuels sont servis tels quels depuis /public/images.
    // Aucun service d'optimisation externe n'est requis.
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
