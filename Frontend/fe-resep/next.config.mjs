/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.eatingbirdfood.com',
            pathname: '/wp-content/uploads/**',
          },
          {
            protocol: 'https',
            hostname: 'cdn.apartmenttherapy.info',
            pathname: '/image/upload/**',
          },
          {
            protocol: 'https',
            hostname: 'www.wholesomeyum.com',
            pathname: '/wp-content/uploads/**',
          },
          {
            protocol: 'https',
            hostname: 'foolproofliving.com',
            pathname: '/wp-content/uploads/**',
          },
          {
            protocol: 'https',
            hostname: 'www.allrecipes.com',
            pathname: '/thmb/**',
          },
          {
            protocol: 'https',
            hostname: 'www.dinneratthezoo.com',
            pathname: '/wp-content/uploads/**',
          },
          {
            protocol: 'https',
            hostname: 'www.eatingwell.com',
            pathname: '/thmb/**',
          },
          {
            protocol: 'https',
            hostname: 'cafedelites.com',
            pathname: '/wp-content/uploads/**',
          },
          {
            protocol: 'https',
            hostname: 'www.budgetbytes.com',
            pathname: '/wp-content/uploads/**',
          },
        ],
      },
};

export default nextConfig;
