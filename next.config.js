/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: "**" }],
  },
  env: {
    NEXT_PUBLIC_API: "https://airbnbnova-api.satek.vn/v1",
    NEXT_PUBLIC_API_DOCS: "https://airbnbnova-api.satek.vn/docs",
    NEXT_PUBLIC_DOMAIN: "https://muathuocsi.vn",
    NEXT_PUBLIC_API_PROXY: "/api",
    NEXT_PUBLIC_LOCALE_DEFAULT: "vi",
  },
  async rewrites() {
    return [
      {
        source: "/:typeSlug/:tour",
        destination: "/detail",
      },
    ];
  },
};

module.exports = nextConfig;