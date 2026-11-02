const isDev = process.env.NODE_ENV !== "production";

/*
  Content Security Policy: solo se permiten recursos del propio dominio.
  - 'unsafe-inline' en scripts es necesario para los scripts de arranque de Next.js
    en páginas estáticas (la alternativa con nonce obliga a renderizar en cada visita).
    El riesgo es bajo: la landing no recibe datos de usuarios ni carga scripts de terceros.
  - En desarrollo se permite 'unsafe-eval' y websockets para la recarga en caliente.
*/
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  // Fuerza HTTPS durante 2 años, incluidos los subdominios
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Evita que el sitio se cargue dentro de un iframe (clickjacking)
  { key: "X-Frame-Options", value: "DENY" },
  // Evita que el navegador "adivine" el tipo de archivo
  { key: "X-Content-Type-Options", value: "nosniff" },
  // No envía la URL completa a otros sitios
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Desactiva APIs del navegador que la landing no usa
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=(), interest-cohort=()",
  },
  // Aísla la ventana de otras pestañas abiertas desde el sitio
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // No revela que el sitio usa Next.js
  poweredByHeader: false,

  images: {
    // Solo imágenes locales; sin dominios remotos no se puede abusar del optimizador
    remotePatterns: [],
    dangerouslyAllowSVG: false,
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
