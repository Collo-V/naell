/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

}


module.exports = {
  ...nextConfig,
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{
        loader:"@svgr/webpack" ,
        options:{
          icon:true
        }
      }],

    });

    return config;
  }
};
