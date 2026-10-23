import type { NextConfig } from "next";

// Hôtes autorisés à charger les ressources de développement (HMR, rechargement).
// Next bloque par défaut les requêtes cross-origin vers /_next/hmr : sans cela,
// les aperçus servis sous un autre nom d'hôte (tunnel, proxy) chargent la page
// mais n'hydratent jamais le React client — les animations restent bloquées.
const extraDevOrigins = (process.env.NEXT_ALLOWED_DEV_ORIGINS ?? "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const nextConfig: NextConfig = {
  allowedDevOrigins: ["localhost", "127.0.0.1", ...extraDevOrigins],
  images: {
    // Les visuels sont servis tels quels depuis /public/images.
    // Aucun service d'optimisation externe n'est requis.
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
