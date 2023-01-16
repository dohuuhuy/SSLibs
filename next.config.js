const withPugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextConfig = {
  inlineImageLimit: 16384,
  images: {
    es: {
      minimumCacheTTL: 60,
    },
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: ['res.cloudinary.com', 'co.sshop.live'],
    formats: ['image/avif', 'image/webp'],
    disableStaticImages: true,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  webpack(config) {
    return config;
  },
};
const plugins = [withImages];
module.exports = withPugins(plugins, nextConfig);
