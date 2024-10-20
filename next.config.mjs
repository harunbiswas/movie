/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['script.viserlab.com', 'www.torrentbd.net', "m.media-amazon.com"], // Add the domain of your image source
      },
      webpack: (config) => {
        config.module.rules.push({
          test: /\.m?js/,
          resolve: {
            fullySpecified: false,
          },
        });
        return config;
      },
};

export default nextConfig;
