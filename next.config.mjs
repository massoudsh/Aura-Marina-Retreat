import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./lib/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.output.hashFunction = 'xxhash64';
    return config;
  },
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: '**.supabase.co' },
    ],
    deviceSizes: [640, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizeCss: true,
  },
};

export default withNextIntl(nextConfig);
