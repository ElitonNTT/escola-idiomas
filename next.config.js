/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "tailwindui.com",
      "localhost",
      "vestibular.faculdadefama.edu.br",
      "avatars.githubusercontent.com",
      "dottis.com.br",
      "epex.faculdadefama.edu.br",
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
