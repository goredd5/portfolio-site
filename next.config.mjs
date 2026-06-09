/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compress: true,
  reactStrictMode: true,
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
  headers: async () => {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Link',
            value: '</images/hero/199820010016.jpg>; rel=preload; as=image; imagesrcset="_next/image?url=%2Fimages%2Fhero%2F199820010016.jpg&w=640&q=75 640w, _next/image?url=%2Fimages%2Fhero%2F199820010016.jpg&w=750&q=75 750w, _next/image?url=%2Fimages%2Fhero%2F199820010016.jpg&w=828&q=75 828w, _next/image?url=%2Fimages%2Fhero%2F199820010016.jpg&w=1080&q=75 1080w, _next/image?url=%2Fimages%2Fhero%2F199820010016.jpg&w=1200&q=75 1200w, _next/image?url=%2Fimages%2Fhero%2F199820010016.jpg&w=1920&q=75 1920w"; imagesizes="100vw"; nopush',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
